import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate';
import moment from 'moment'
import cuid from 'cuid'
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react'
import { createActivity, updateActivity } from '../activityActions'
import TextInput from '../../../app/common/form/TextInput'
import TextArea from '../../../app/common/form/TextArea'
import SelectInput from '../../../app/common/form/SelectInput'
import DateInput from '../../../app/common/form/DateInput'




// ownProps are parent component's properties.
const mapStateToProps = (state, ownProps) => {
  // id of a selected activity is assigned
  const activityId = ownProps.match.params.id;

  let activity = {}

  if (activityId && state.activities.length > 0) {
    activity = state.activities.filter(activity => activity.id === activityId)[0]
  }

  return {
    initialValues: activity
  }
}

const actions = {
  createActivity,
  updateActivity
}
// snippet for dropdown SelectInput.
const category = [
  { key: 'kaivos', text: 'Kaivosvahdit', value: 'kaivos' },
  { key: 'hakku', text: 'Hakkuvahdit', value: 'hakku' },
  { key: 'maa', text: 'Maavahtit', value: 'maa' },
  { key: 'roska', text: 'Roskavahtit', value: 'roska' },
  { key: 'suo', text: 'Suovahdit', value: 'suo' },
  { key: 'natura', text: 'Naturavahdit', value: 'natura' }
];

const validate = combineValidators({
  title: isRequired({ message: 'Havainton tiitteli on pakollinen' }),
  category: isRequired({ message: 'Havainton tyyppi on pakollinen' }),
  description: composeValidators(
    isRequired({ message: 'Olkaa hyvaa ja kirjoittaka havannosta' }),
    hasLengthGreaterThan(6)({ message: 'Kirjoitus tulee olla ainakin 5 merkkia' })
  )(),
  coordinates: isRequired('coordinates'),
  venue: isRequired('venue'),
  date: isRequired('date')
})

class ActivityForm extends Component {

  onFormSubmit = values => {
    values.date = moment(values.date).format()
    if (this.props.initialValues.id) {
      this.props.updateActivity(values);
      this.props.history.goBack();
    } else {
      const newActivity = {
        ...values,
        id: cuid(),
        hostPhotoURL: '/assets/user.png',
        hostedBy: 'Art'
      };
      this.props.createActivity(newActivity);
      this.props.history.push('/activities');
    }
  }

  render() {
    const { invalid, submitting, pristine } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='black' content='Havainnon Yksityskohdat' />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name='title'
                type='text'
                component={TextInput}
                placeholder='Nimeä oma uusi havainto' />
              <Field
                name='category'
                type='text'
                component={SelectInput}
                options={category}
                multiple={true}
                placeholder='Mikä tyypinen on uusi havainto' />
              <Field
                name='description'
                type='text'
                rows={4}
                component={TextArea}
                placeholder='Selostaa oma uusi havainto' />
              <Header sub color='black' content='Havainnon Taphadumapaikka' />
              <Field
                name='venue'
                type='text'
                component={TextInput}
                placeholder='Missä on uusi havainto taphatunut' />
              <Field
                name='cordinates'
                type='text'
                component={TextInput}
                placeholder='Koordinaatit' />
              <Field
                name="date"
                type="text"
                component={DateInput}
                dateFormat='YYYY-MM-DD HH:mm'
                timeFormat='HH:mm'
                showTimeSelect
                placeholder='Päivämäärä' />

              <Button
                disabled={invalid || submitting || pristine}
                type="submit">
                Lisää
                </Button>
              <Button
                onClick={this.props.history.goBack}
                type="button">
                Peruuttaa
                </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, actions)(
  reduxForm({ form: 'activityForm', enableReinitialize: true, validate })(ActivityForm)
);

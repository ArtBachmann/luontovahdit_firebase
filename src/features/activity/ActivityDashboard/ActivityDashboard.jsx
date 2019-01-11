import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import ActivityList from '../ActivityList/ActivityList'
import { deleteActivity } from '../activityActions'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import ActivityActions from '../ActivityActions/ActivityActions'



// activities are coming from the store
const mapStateToProps = (state) => ({
  activities: state.activities,
  loading: state.async.loading
})

const actions = {
  deleteActivity
}


class ActivityDashboard extends Component {

  handleDeleteActivity = activityId => () => {
    this.props.deleteActivity(activityId)
  }

  render() {
    // now this.props comes from the store     
    const { activities, loading } = this.props
    if (loading) return <LoadingComponent inverted={true} />
    return (
      <Grid>
        <Grid.Column
          width={10}>
          <ActivityList
            deleteActivity={this.handleDeleteActivity}
            activities={activities} />
        </Grid.Column>
        <Grid.Column
          width={6}>
          <ActivityActions />
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, actions)(ActivityDashboard)

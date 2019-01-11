import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';

const RegisterForm = () => {
  return (
    <div>
      <Form size="large">
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Tunnettu kuin..."
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Sähköposti"
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="Salasana"
          />
          <Button fluid size="large" color="grey">
            Registeröidy
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

export default reduxForm({form: 'registerForm'})(RegisterForm);
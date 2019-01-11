import React from 'react'
import { Form, Label } from 'semantic-ui-react';

// Props are coming from redux-form package.
const TextInput = ({ input, width, type, placeholder, meta: { touched, error } }) => {
  return (
    <Form.Field
      error={touched && !!error}
      width={width}>
      <input {...input}
        placeholder={placeholder}
        type={type} />
      {/* validation error */}
      {touched && error && <Label
        basic
        color='red'>{error}</Label>}
    </Form.Field>

  )
}

export default TextInput

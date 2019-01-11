import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

const SignedOutMenu = ({signIn, register}) => {
  return (
    <Menu.Item position="right">
			<Button onClick={signIn} basic color='black' content="Kirjaudu" />
			<Button onClick={register} basic color='black' content="Registeröidy" style={{ marginLeft: '0.5em' }} />
		</Menu.Item>
  )
}

export default SignedOutMenu

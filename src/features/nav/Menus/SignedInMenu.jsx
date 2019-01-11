import React from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const SignedInMenu = ({ signOut, auth }) => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src='/assets/user.png' />
      <Dropdown pointing="top left" text={auth.email}>
        <Dropdown.Menu>
          <Dropdown.Item text="Luo Havainto" icon="plus" />
          <Dropdown.Item text="Minun Havainnot" icon="calendar" />
          <Dropdown.Item text="Minun Ystävät" icon="users" />
          <Dropdown.Item text="Minun Profiili" icon="user" />
          <Dropdown.Item as={Link} to="/settings" text="Asetukset" icon="settings" />
          <Dropdown.Item onClick={signOut} text="Kirjaudu Ulos" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}

export default SignedInMenu

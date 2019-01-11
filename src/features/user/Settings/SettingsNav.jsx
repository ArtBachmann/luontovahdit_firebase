import React from 'react'
import { Grid, Menu, Header } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

const SettingsNav = () => {
  return (
        <Grid.Column width={4}>
          <Menu vertical>
            <Header 
            icon="user" 
            attached 
            inverted 
            color="grey" 
            content="Profiili" />
            <Menu.Item as={NavLink} to="/settings/basic">Yleista</Menu.Item>
            <Menu.Item as={NavLink} to="/settings/about">Minusta</Menu.Item>
            <Menu.Item as={NavLink} to="/settings/photos">Kuvat</Menu.Item>
          </Menu>
          <Grid.Row />
          <Menu vertical>
            <Header
              icon="settings"
              attached
              inverted
              color="grey"
              content="Tili"
            />
            <Menu.Item as={NavLink} to="/settings/account">Minun Tili</Menu.Item>
          </Menu>
        </Grid.Column>
  )
}

export default SettingsNav

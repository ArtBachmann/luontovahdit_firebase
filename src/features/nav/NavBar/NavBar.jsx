import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'
import { Menu, Container } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import SignedOutMenu from '../Menus/SignedOutMenu'
import SignedInMenu from '../Menus/SignedInMenu'
import { openModal } from '../../modals/modalActions'
import { logout } from '../../auth/authActions'

const actions = {
  openModal,
  logout
}

const mapState = (state) => ({
  auth: state.firebase.auth
})

class NavBar extends Component {

  handleSignIn = () => {
    this.props.openModal('LoginModal')
  }

  handleRegister = () => {
    this.props.openModal('RegisterModal')
  }


  handleSignOut = () => {
    this.props.firebase.logout()
    this.props.history.push('/')
  }

  render() {
    const { auth } = this.props
    const authenticated = auth.isLoaded && !auth.isEmpty
    return (
      <Menu fixed="top">
        <Container>

          {authenticated &&
            <Menu.Item as={Link} to='/people' name="Osallistujat" />}

          <Menu.Item as={Link} to='/activities' name="Havainnot" />

          {authenticated &&
            <Menu.Item
              as={Link}
              to='/createActivity'
              floated="right"
              basic
              color=''
              content="Uusi havainto"
            />
          }

          {authenticated ? (
            <SignedInMenu
              auth={auth}
              signOut={this.handleSignOut} />
          ) : (
              <SignedOutMenu signIn={this.handleSignIn}
                register={this.handleRegister} />)}
        </Container>
      </Menu>
    )
  }
}

export default withRouter(withFirebase(connect(mapState, actions)(NavBar)))




import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom'

import NavBar from '../../features/nav/NavBar/NavBar'
import HomePage from '../../features/home/HomePage'
import ActivityDashboard from '../../features/activity/ActivityDashboard/ActivityDashboard'
import ActivityDetailedPage from '../../features/activity/ActivityDetailed/ActivityDetailedPage'
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard'
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage'
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard'
import ActivityForm from '../../features/activity/ActivityForm/ActivityForm'
import ModalManager from '../../features/modals/ModalManager'



class App extends Component {
  render() {
    return (
      <div>
        <ModalManager />
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className='main'>
                <Switch>
                  <Route path='/activities' component={ActivityDashboard} />                 
                  <Route path='/activity/:id' component={ActivityDetailedPage} />
                  <Route path='/manage/:id' component={ActivityForm} />
                  <Route path='/people' component={PeopleDashboard} />
                  <Route path='/profile/:id' component={UserDetailedPage} />
                  <Route path='/settings' component={SettingsDashboard} />
                  <Route path='/createActivity' component={ActivityForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;

// git push --set-upstream origin react-concepts

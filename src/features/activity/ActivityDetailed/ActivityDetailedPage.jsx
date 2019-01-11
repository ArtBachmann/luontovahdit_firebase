import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import  ActivityDetailedChat  from './ActivityDetailedChat'
import  ActivityDetailedHeader  from './ActivityDetailedHeader'
import  ActivityDetailedInfo  from './ActivityDetailedInfo'
import  ActivityDetailedSidebar  from './ActivityDetailedSidebar'

// ownProps are router properties, not from the store.
const mapStateToProps = (state, ownProps)  => {
  // Get activtyId for later use
  const activityId = ownProps.match.params.id

  let activity = {}

  // check if there is activities in the store
  if (activityId && state.activities.length > 0) {
    // filter returns a new array with only an activity that matches the activityId.
    activity = state.activities.filter(activity => activity.id === activityId)[0]
  }  
  // return that particular activity
  return {
    activity
  }
}


const ActivityDetailedPage = ({activity}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
      <ActivityDetailedHeader activity={activity} />
      <ActivityDetailedInfo activity={activity} />
      <ActivityDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
      <ActivityDetailedSidebar attendees={activity.attendees} />
      </Grid.Column>
    </Grid>
  )
}

export default connect(mapStateToProps)(ActivityDetailedPage) 

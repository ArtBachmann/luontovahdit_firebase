import React, { Component } from 'react'
import ActivityListItem from './ActivityListItem'

class ActivityList extends Component {
  render() {
    // props are coming from ActivityDashboard.
    const {activities, deleteActivity} = this.props 
    return (
      <div>        
        {activities.map(activity => (
          <ActivityListItem 
          key={activity.id} 
          activity={activity}          
          deleteActivity={deleteActivity}
          />
        ))}        
      </div>
    )
  }
}

export default ActivityList

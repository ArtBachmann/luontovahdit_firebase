import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import format from 'date-fns/format'
import ActivityListAttendee from './ActivityListAttendee'

class ActivityListItem extends Component {
  render() {
    //get an individual activity.
    // props are coming from ActivityList.
    const { activity, deleteActivity } = this.props
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image
                size="tiny"
                circular
                src={activity.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{activity.title}</Item.Header> <Divider />
                <p>Lähettänyt</p>   <Item.Description as="a">{activity.hostedBy} </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {format(activity.date, 'dddd Do MMMM')} at{' '}
            {format(activity.date, 'HH:mm')} |
            <Icon name="marker" /> {activity.cordinates} |
            <Icon name="filter" /> {activity.category}
          </span>
        </Segment>
        <Segment >
          <span>{activity.venue}</span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {activity.attendees && activity.attendees.map((attendee) => ( // check before is there an array attendees.
              <ActivityListAttendee key={attendee.id} attendee={attendee} />
            ))}
          </List>
        </Segment>
        <Segment >
          <span>{activity.description}</span>
        </Segment>
        <Segment clearing>
          <Button
            onClick={deleteActivity(activity.id)}
            basic color="grey"
            floated="right" content="Poista" />

          <Button
            as={Link} to={`/activity/${activity.id}`}
            basic color="grey" floated="right" content="Seuraa" />
        </Segment>
      </Segment.Group>
    )
  }
}

export default ActivityListItem

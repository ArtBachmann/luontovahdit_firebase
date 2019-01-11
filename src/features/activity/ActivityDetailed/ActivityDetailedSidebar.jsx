import React from 'react'
import { Segment, List, Item, Label } from 'semantic-ui-react'

// attendees and the other props come from activityReducer
const ActivtyDetailedSidebar = ({ attendees }) => {
  const isHost = false
  return (
    <div>
      <Segment
        textAlign="center"
        style={{ border: 'none' }}
        attached="top"
        secondary
        inverted
        color=""
      >
        {attendees && attendees.length} {attendees && attendees.length === 1 ? 'Vierailia' : "Vierailiaa"} Seuraa
          </Segment>
      <Segment
        attached>
        <List
          relaxed
          divided>

          {attendees &&
            attendees.map(attendee => (
              <Item
                key={attendee.id}
                style={{ position: 'relative' }}>
                {isHost &&
                  <Label
                    style={{ position: 'absolute' }}
                    color=""
                    ribbon="right"
                  >
                    Host
                </Label>}
                <Item.Image
                  size="tiny"
                  src={attendee.photoURL} />
                <Item.Content
                  verticalAlign="middle">
                  <Item.Header
                    as="h3">
                    {attendee.name}
                  </Item.Header>
                </Item.Content>
              </Item>
            ))}
        </List>
      </Segment>
    </div>
  )
}

export default ActivtyDetailedSidebar

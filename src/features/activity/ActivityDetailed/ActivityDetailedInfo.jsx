import React from 'react'
import { Segment, Grid, Icon, Button } from 'semantic-ui-react'
import format from 'date-fns/format'

const ActivityDetailedInfo = ({ activity }) => {
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{activity.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" color="" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{format(activity.date, 'dddd Do MMM')} at{' '}
              {format(activity.date, 'h:mm A')}
            </span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" color="" />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{activity.venue}</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button color="" size="tiny" content="Kartalla" />
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  )
}

export default ActivityDetailedInfo

import React from 'react'
import { Image, Segment, Item, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import format from 'date-fns/format'

const activityImageStyle = {
  filter: 'brightness(50%)'
};

const activityImageTextStyle = {
  position: 'absolute',
  bottom: '5%',
  left: '5%',
  width: '100%',
  height: 'auto',
  color: 'white'
};

const ActivityDetailedHeader = ({ activity }) => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: '0' }}>
        <Image src={`/assets/images/${activity.category}.jpg`} fluid style={activityImageStyle} />
        <Segment basic style={activityImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={activity.title}
                  style={{ color: 'white' }}
                />
                <p>{format(activity.date, 'dddd Do MMMM')}</p>
                <p>
                  Lisäänyt: <strong>{activity.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>Keskeytta</Button>
        <Button color="">Osallistuu keskusteluun</Button>
        <Button as={Link} to={`/manage/${activity.id}`} color="" floated="right">
          Muokkaa havaintoa
            </Button>
      </Segment>
    </Segment.Group>
  )
}

export default ActivityDetailedHeader

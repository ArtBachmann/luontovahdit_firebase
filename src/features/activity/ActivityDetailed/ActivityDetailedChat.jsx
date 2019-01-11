import React from 'react'
import { Segment, Header, Comment, Form, Button } from 'semantic-ui-react'

const ActivityDetailedChat = () => {
  return (
        <div>
          <Segment
            textAlign="center"
            attached="top"
            inverted
            color=""
            style={{ border: 'none' }}
          >
            <Header>Keskustelu havannosta</Header>
          </Segment>
    
          <Segment attached>
            <Comment.Group>
              <Comment>
                <Comment.Avatar src="/assets/user.png" />
                <Comment.Content>
                  <Comment.Author as="a">Matti</Comment.Author>
                  <Comment.Metadata>
                       <div>Tänään 5:42PM</div>
                  </Comment.Metadata>
                  <Comment.Text> Kaivoksen perustaminen ja kaivostoiminta tarvitsevat Tukesista kaivosluvan ja kaivosturvallisuusluvan</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Vastaa</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
    
              <Comment>
                <Comment.Avatar src="/assets/user.png" />
                <Comment.Content>
                  <Comment.Author as="a">Art</Comment.Author>
                  <Comment.Metadata>
                    <div>Eileen 12:30AM</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>
                    Tekstin tärkeimmät ominaisuudet ovat sidosteisuus ja johdonmukaisuus.
                    </p>
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Vastaa</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
                <Comment.Group>
                  <Comment>
                    <Comment.Avatar src="/assets/user.png" />
                    <Comment.Content>
                      <Comment.Author as="a">Maija</Comment.Author>
                      <Comment.Metadata>
                        <div>Juuri nyt</div>
                      </Comment.Metadata>
                      <Comment.Text>Kaivannaisten kasvavalla kulutuksella on vaikutuksia niin paikallisesti kuin globaalisti :)</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Vastaa</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>   
              
    
              <Form reply>
                <Form.TextArea />
                <Button
                  content="Vastaa"
                  labelPosition="left"
                  icon="edit"
                  color=""
                />
              </Form>
            </Comment.Group>
          </Segment>
        </div>
  )
}


export default ActivityDetailedChat

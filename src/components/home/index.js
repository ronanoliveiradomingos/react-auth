import React from 'react';
import { Container, Header, Image, Item, Button, Icon, Label } from 'semantic-ui-react'
import headerParagraph from '../../images/paragraph.png';
import paragraph from '../../images/paragraph.png';
import wireframe from '../../images/wireframe.png';
import square from '../../images/square-image.png';

import { withAuthorization } from '../session';

const HomePage = () => (
  <Container text style={{ marginTop: '7em' }}>
    <Header as='h1'>Home</Header>
    <p>The Home Page is accessible by every signed in user.</p>
    <p>
      A text container is used for the main container, which is useful for single column layouts.
  </p>

    {/* <Image src={headerParagraph} style={{ marginTop: '2em' }} />
    <Image src={paragraph} style={{ marginTop: '2em' }} />
    <Image src={paragraph} style={{ marginTop: '2em' }} />
    <Image src={paragraph} style={{ marginTop: '2em' }} />
    <Image src={paragraph} style={{ marginTop: '2em' }} />
    <Image src={paragraph} style={{ marginTop: '2em' }} />
    <Image src={paragraph} style={{ marginTop: '2em' }} /> */}

      <Item.Group divided>
        <Item>
          <Item.Image src={wireframe} />
          <Item.Content>
            <Item.Header as='a'>Content Header</Item.Header>
            <Item.Meta>
              <span>Date</span>
              <span>Category</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra>
              <Image avatar circular src={square} />
              Username
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src={wireframe} />
          <Item.Content>
            <Item.Header as='a'>Content Header</Item.Header>
            <Item.Meta>
              <span>Date</span>
              <span>Category</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra>
              <Button floated='right' primary>
                Primary
                <Icon name='chevron right' />
              </Button>
              <Label>Limited</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image src={wireframe} />
          <Item.Content>
            <Item.Header as='a'>Content Header</Item.Header>
            <Item.Meta>
              <span>Date</span>
              <span>Category</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra>
              <Button primary floated='right'>
                Primary
                <Icon name='chevron right' />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>

  </Container>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
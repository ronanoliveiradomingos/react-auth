import React from 'react';
import { Container, Header, Image, Item, Button, Icon, Label } from 'semantic-ui-react'
import headerParagraph from '../../images/paragraph.png';
import paragraph from '../../images/paragraph.png';
import wireframe from '../../images/wireframe.png';
import square from '../../images/square-image.png';

import { withAuthorization } from '../session';

const ClientPage = () => (
  <Container text style={{ marginTop: '7em' }}>
    <Header as='h1'>Clinte</Header>
    <p>The Cliente Page is accessible by every signed in user.</p>
    <p>
      A text container is used for the main container, which is useful for single column layouts.
  </p>

    <Image src={headerParagraph} style={{ marginTop: '2em' }} />
    <Image src={paragraph} style={{ marginTop: '2em' }} />
    <Image src={paragraph} style={{ marginTop: '2em' }} />
    <Image src={paragraph} style={{ marginTop: '2em' }} />
    <Image src={paragraph} style={{ marginTop: '2em' }} />
    <Image src={paragraph} style={{ marginTop: '2em' }} />
    <Image src={paragraph} style={{ marginTop: '2em' }} />

  </Container>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(ClientPage);
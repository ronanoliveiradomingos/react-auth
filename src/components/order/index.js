import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react'
import headerParagraph from '../../images/paragraph.png';
import paragraph from '../../images/paragraph.png';

import { withAuthorization } from '../session';

const OrderPage = () => (
  <Container text style={{ marginTop: '7em' }}>
    <Header as='h1'>Ordem de Serviço</Header>
    <p>The Ordem de Serviço Page is accessible by every signed in user.</p>
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

export default withAuthorization(condition)(OrderPage);
import React from 'react';
import { Container, Header, Divider } from 'semantic-ui-react'

import { PasswordForgetForm } from '../passwordForget';
import PasswordChangeForm from '../passwordChange';
import { AuthUserContext, withAuthorization } from '../session';

const AccountPage = () => (

  <AuthUserContext.Consumer>
    {authUser => (
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>Account</Header>
        <p>The Account Page is accessible by every signed in user.</p>
        <p>
          A text container is used for the main container, which is useful for single column layouts.
        </p>

        {/* <Container textAlign='right'>E-mail: {authUser.email}</Container> */}
        <PasswordChangeForm />
      </Container>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
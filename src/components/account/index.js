import React from 'react';

import { PasswordForgetForm } from '../passwordForget';
import PasswordChangeForm from '../passwordChange';
import { AuthUserContext, withAuthorization } from '../session';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
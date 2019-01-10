import React from 'react';
import { Menu } from 'semantic-ui-react'

import { withFirebase } from '../firebase';

const SignOutButton = ({ firebase }) => (
  <Menu.Menu position='right'>
    <Menu.Item onClick={firebase.doSignOut} name='SignOut'>Sign Out</Menu.Item>
  </Menu.Menu>
);

export default withFirebase(SignOutButton);
import React from 'react';
import { Menu, Dropdown, Image } from 'semantic-ui-react'
import { withFirebase } from '../firebase';
import user from '../../images/user.png';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

const trigger = (
  <span>
    <Image avatar size='mini' src={user} style={{ marginRight: '1.5em', marginLeft: '1.5em' }} />
  </span>
)

const SignOutButton = ({ firebase }) => (
  <Menu.Item header>
    Ronan Oliveira Domingos
    <Dropdown trigger={trigger} pointing='top left' icon={null}>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to={ROUTES.ADMIN} name='Admin'>Admin</Dropdown.Item>
        <Dropdown.Item as={Link} to={ROUTES.ACCOUNT} name='Account' icon='user'>Account</Dropdown.Item>
        <Dropdown.Item onClick={firebase.doSignOut} name='SignOut' icon='sign out'>Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Menu.Item>
);

export default withFirebase(SignOutButton);
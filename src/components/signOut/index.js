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
    <Dropdown trigger={trigger} pointing='top right' text='Left menu' icon={null}>
      <Dropdown.Menu>
        <Dropdown.Header content='Ronan Oliveira Domingos' />
        <Dropdown.Divider />
        <Dropdown.Item as={Link} to={ROUTES.ACCOUNT} name='Account' icon='user' text='Account'/>
        <Dropdown.Item as={Link} to={ROUTES.ADMIN} name='Admin' icon='settings' text='Admin'/>
        <Dropdown.Item onClick={firebase.doSignOut} name='SignOut' icon='sign out' text='Sign Out'/>
      </Dropdown.Menu>
    </Dropdown>
    </Menu.Item>
);

export default withFirebase(SignOutButton);
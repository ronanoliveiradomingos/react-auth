import React from 'react';
import { Menu, Dropdown, Image } from 'semantic-ui-react'
import { withFirebase } from '../firebase';
import user from '../../images/user.png';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { Z_BLOCK } from 'zlib';

const trigger = (
    <Image avatar size='mini' src={user} style={{ marginTop: '1.5em', marginBottom: '5%',  marginRight: '1.5em', marginLeft: '1.5em' }} />
)

const SignOutButton = ({ firebase }) => (
    <Dropdown trigger={trigger} pointing='top right' text='Left menu' icon={null}>
      <Dropdown.Menu>
        <Dropdown.Header content='Ronan Oliveira Domingos' />
        <Dropdown.Divider />
        <Dropdown.Item as={Link} to={ROUTES.ACCOUNT} name='Account' icon='user' text='Account' />
        <Dropdown.Item as={Link} to={ROUTES.ADMIN} name='Admin' icon='settings' text='Admin' />
        <Dropdown.Item onClick={firebase.doSignOut} name='SignOut' icon='sign out' text='Sign Out' />
      </Dropdown.Menu>
    </Dropdown>
);

export default withFirebase(SignOutButton);
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import SignOutButton from '../signOut';
import * as ROUTES from '../../constants/routes';

import { withAuthorization } from '../session';

const Navigation = () => (
    <Menu fixed='top' inverted>
        {/* <Menu.Item as={Link} to={ROUTES.LANDING} name='Landing' /> */}
        <Menu.Item as={Link} to={ROUTES.HOME} name='Home' />
        <Menu.Item as={Link} to={ROUTES.ACCOUNT} name='Account' />
        <Menu.Item as={Link} to={ROUTES.ADMIN} name='Admin' />

        <SignOutButton />
    </Menu>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Navigation);
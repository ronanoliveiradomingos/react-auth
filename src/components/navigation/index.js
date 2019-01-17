import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Dropdown, Image } from 'semantic-ui-react'
import SignOutButton from '../signOut';
import * as ROUTES from '../../constants/routes';
import logo from '../../images/logo.png';
import { withAuthorization } from '../session';

const Navigation = () => (

    <div>
        <Menu fixed='top' inverted>

            <Menu.Item as={Link} to={ROUTES.HOME} header>
                <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />Project WK</Menu.Item>
            <Container>
                <Menu.Item as={Link} to={ROUTES.HOME} name='Home' />
                <Menu.Item as={Link} to={ROUTES.HOME} name='Orçamento' />
                <Menu.Item as={Link} to={ROUTES.HOME} name='Clientes' />

            </Container>
            {/* <Menu.Menu position='right'>
                <Dropdown item simple text=''>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to={ROUTES.ACCOUNT} name='Account'>Account</Dropdown.Item>
                        <Dropdown.Item as={Link} to={ROUTES.ADMIN} name='Admin'>Admin</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu> */}
            <SignOutButton />
        </Menu>

    </div>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Navigation);
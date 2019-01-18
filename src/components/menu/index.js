import _ from "lodash";
import React, { Component } from "react";
import {
    Container,
    Icon,
    Image,
    Menu,
    Sidebar,
    Responsive
} from "semantic-ui-react";
import SignOutButton from '../signOut';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

const NavBarMobile = ({
    children,
    leftItems,
    onPusherClick,
    onToggle,
    rightItems,
    visible
}) => (
        <Sidebar.Pushable>
            <Sidebar
                as={Menu}
                animation="overlay"
                icon="labeled"
                inverted
                vertical
                visible={visible}
                width='thin'
            >
                {_.map(leftItems, item => <Menu.Item {...item} />)}
            </Sidebar>

            <Sidebar.Pusher
                dimmed={visible}
                onClick={onPusherClick}
                style={{ minHeight: "100vh" }}
            >
                <Menu fixed="top" inverted>
                    <Menu.Item>
                        <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
                    </Menu.Item>
                    <Menu.Item onClick={onToggle}>
                        <Icon name="sidebar" />
                    </Menu.Item>
                    {/* <Menu.Menu position="right">
                        {_.map(rightItems, item => <Menu.Item {...item} />)}
                    </Menu.Menu> */}
                    <SignOutButton/>
                </Menu>
                {children}
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );

const NavBarDesktop = ({ leftItems, rightItems }) => (
    <Menu fixed="top" inverted>
        <Menu.Item>
            <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>
        {_.map(leftItems, item => <Menu.Item {...item} />)}
        <Menu.Menu position="right">
            <SignOutButton/>
        </Menu.Menu>
    </Menu>
);

const NavBarChildren = ({ children }) => (
    <Container style={{ marginTop: "5em" }}>{children}</Container>
);

class NavBar extends Component {
    state = {
        visible: false,
        activeItem: 'Home'
    };

    handlePusher = () => {
        const { visible } = this.state;
        if (visible) this.setState({ visible: false });
    };

    handleToggle = () => this.setState({ visible: !this.state.visible });

    render() {
        const { children, leftItems, rightItems } = this.props;
        const { visible } = this.state;

        return (
            <div>
                <Responsive {...Responsive.onlyMobile}>
                    <NavBarMobile
                        leftItems={leftItems}
                        onPusherClick={this.handlePusher}
                        onToggle={this.handleToggle}
                        rightItems={rightItems}
                        visible={visible}
                    >
                        <NavBarChildren>{children}</NavBarChildren>
                    </NavBarMobile>
                </Responsive>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
                    <NavBarChildren>{children}</NavBarChildren>
                </Responsive>
            </div>
        );
    }
}

// const leftItems = [
//     { as: Link, to: ROUTES.HOME, content: "Home", name: "Home", key: "home" },
//     { as: Link, to: ROUTES.ORDER_PAGE, content: "Orçamento", name: "Orçamento", key: "order" },
//     { as: Link, to: ROUTES.CLIENT_PAGE, content: "Cliente", name: "Cliente", key: "client" }
// ];
// const rightItems = [
//     { as: "a", content: "Login", key: "login" },
//     { as: "a", content: "Register", key: "register" }
// ];

// const App = () => (
//     <NavBar leftItems={leftItems} rightItems={rightItems}>

//         {/*<Container>
//              <Menu.Item as={Link} to={ROUTES.HOME} name='Home' />
//             <Menu.Item as={Link} to={ROUTES.ORDER_PAGE} name='Orçamento' />
//             <Menu.Item as={Link} to={ROUTES.CLIENT_PAGE} name='Clientes' /> 
//         </Container>*/}
//         {/* <SignOutButton /> */}

//     </NavBar>
// );

//render(<App />, document.getElementById("root"));

export default NavBar;

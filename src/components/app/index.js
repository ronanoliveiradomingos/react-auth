import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../navigation';
import NavBar from '../menu';
import { Link } from 'react-router-dom';

import Footer from '../footer';
import SignUpPage from '../signUp';
import SignInPage from '../signIn';
import PasswordForgetPage from '../passwordForget';
import HomePage from '../home';
import AccountPage from '../account';
import AdminPage from '../admin';
import OrderPage from '../order';
import ClientPage from '../client';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../session';

const leftItems = [
  { as: Link, to: ROUTES.HOME, name: "Home" },
  { as: Link, to: ROUTES.ORDER_PAGE, name: "Orçamento" },
  { as: Link, to: ROUTES.CLIENT_PAGE, name: "Cliente" }
];

const rightItems = [
  { as: "a", content: "Login", key: "login" },
  { as: "a", content: "Register", key: "register" }
];

const App = () => (
  <Router>
    <div>
      <NavBar leftItems={leftItems} rightItems={rightItems}>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.HOME_PAGE} component={HomePage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.ORDER_PAGE} component={OrderPage} />
        <Route path={ROUTES.CLIENT_PAGE} component={ClientPage} />
        <Footer />
      </NavBar>
    </div>
  </Router>
);

export default withAuthentication(App);
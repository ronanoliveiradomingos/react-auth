import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../navigation';
import Footer from '../footer';
import SignUpPage from '../signUp';
import SignInPage from '../signIn';
import PasswordForgetPage from '../passwordForget';
import HomePage from '../home';
import AccountPage from '../account';
import AdminPage from '../admin';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../session';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.HOME_PAGE} component={HomePage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      
      <Footer />
    </div>
  </Router>
);

export default withAuthentication(App);
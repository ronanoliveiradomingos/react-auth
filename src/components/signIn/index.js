import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { SignUpLink } from '../signUp';
import { Link } from 'react-router-dom';
import { withFirebase } from '../firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
    <SignInForm />
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.setState({ error: '' });

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div className='login-form'>
        <style>{`body > div,body > div > div,body > div > div > div.login-form {height: 100%;}`}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
          </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input name="email" fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.onChange} />
                <Form.Input
                  name="password"
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={this.onChange}
                />
                <Button disabled={isInvalid} color='teal' fluid size='large' onClick={this.onSubmit}>
                  Login
              </Button>
              </Segment>
            </Form>
            {error && <Message error header='Error' content={error.message} />}
            <Message>
              <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
            </Message>
            <Message>
              <SignUpLink />
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
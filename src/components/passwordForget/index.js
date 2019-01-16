import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Message, Form, Container, Header } from 'semantic-ui-react'

import { withFirebase } from '../firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForgetPage = () => (
    <PasswordForgetForm />
);

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email } = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.SIGN_IN);
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
        const { email, error } = this.state;

        const isInvalid = email === '';

        return (
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>Reset Password</Header>
                <Form>
                    <Form.Field>
                        <label>Email Address</label>
                        <input
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Email Address"
                        />
                    </Form.Field>
                    <Button type='submit' onClick={this.onSubmit} disabled={isInvalid}>Reset My Password</Button>
                    {error && <Message error header='Error' content={error.message} />}
                </Form>
            </Container>
        );
    }
}

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
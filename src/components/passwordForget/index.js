import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Message, Form } from 'semantic-ui-react'

import { withFirebase } from '../firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForgetPage = () => (
    <div>
        <h1>PasswordForget</h1>
        <PasswordForgetForm />
    </div>
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
            <Form>
                <Form.Field>
                    <label>E-mail</label>
                    <input name="email" placeholder='Email Address' onChange={this.onChange} type="text" />
                </Form.Field>
                <Button type='submit' onClick={this.onSubmit} disabled={isInvalid}>Reset My Password</Button>
                {error && <Message error header='Error' content={error.message} />}
            </Form>
            //     <form onSubmit={this.onSubmit}>
            //         <input
            //             name="email"
            //             value={this.state.email}
            //             onChange={this.onChange}
            //             type="text"
            //             placeholder="Email Address"
            //         />
            //         <button disabled={isInvalid} type="submit">
            //             Reset My Password
            // </button>

            //         {error && <p>{error.message}</p>}
            //     </form>
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
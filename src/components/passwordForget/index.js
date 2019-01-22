import React, { Component } from 'react';
import { Button, Message, Form, Grid, Header, Segment, Container } from 'semantic-ui-react'

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

            <div className='login-form'>
                <style>{`body > div,body > div > div,body > div > div > div.login-form {height: 100%;}`}</style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>Reset your password</Header>
                        <Container>
                            <Form size='large'>
                                <Segment stacked>
                                    <p>Enter your email address and we will send you a link to reset your password.</p>
                                    <Form.Input name="email" value={email} fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.onChange} />
                                    <Button disabled={isInvalid} color='teal' fluid size='large' onClick={this.onSubmit}>Send password reset email</Button>
                                </Segment>
                            </Form>
                            {error && <Message error header='Error' content={error.message} />}
                        </Container>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm };
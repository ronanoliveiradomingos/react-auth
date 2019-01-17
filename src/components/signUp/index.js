import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Message, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { withFirebase } from '../firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
    <SignUpForm />
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = async event => {
        const { username, email, passwordOne } = this.state;

        await this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                this.props.firebase
                    .users().push({
                        uid: authUser.user.uid,
                        username: username,
                        email: email,
                        createdAt: Date.now()
                    })
                    .then(() => {
                        this.setState({ ...INITIAL_STATE });
                        this.props.history.push(ROUTES.HOME);
                    })
                    .catch(error => {
                        this.setState({ error });
                    });
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
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (

            <div className='login-form'>
                <style>{`body > div,body > div > div,body > div > div > div.login-form {height: 100%;}`}</style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Create your personal account
              </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input
                                    name="username"
                                    value={username}
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='Full Name'
                                    onChange={this.onChange}
                                />
                                <Form.Input
                                    name="email"
                                    value={email}
                                    fluid
                                    icon='mail'
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                    onChange={this.onChange}
                                />
                                <Form.Input
                                    name="passwordOne"
                                    fluid
                                    value={passwordOne}
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.onChange}
                                />
                                <Form.Input
                                    name="passwordTwo"
                                    fluid
                                    value={passwordTwo}
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Confirm password'
                                    type='password'
                                    onChange={this.onChange}
                                />
                                <Button disabled={isInvalid} color='teal' fluid size='large' onClick={this.onSubmit}>
                                    Create an account
                  </Button>
                            </Segment>
                        </Form>
                        {error && <Message error header='Error' content={error.message} />}
                    </Grid.Column>
                </Grid>
            </div>

            // <Container text style={{ marginTop: '7em' }}>
            //     <Header as='h1'>Join System</Header>
            //     <p>Create your personal account</p>
            //     <Form>
            //         <Form.Field>
            //             <label>Full Name</label>
            //             <input
            //                 name="username"
            //                 value={username}
            //                 onChange={this.onChange}
            //                 type="text"
            //                 placeholder="Full Name"
            //             />
            //         </Form.Field>
            //         <Form.Field>
            //             <label>Email address</label>
            //             <input
            //                 name="email"
            //                 value={email}
            //                 onChange={this.onChange}
            //                 type="text"
            //                 placeholder="Email Address"
            //             />
            //         </Form.Field>
            //         <Form.Field>
            //             <label>Password</label>
            //             <input
            //                 name="passwordOne"
            //                 value={passwordOne}
            //                 onChange={this.onChange}
            //                 type="password"
            //                 placeholder="Password"
            //             />
            //         </Form.Field>
            //         <Form.Field>
            //             <label>Confirm password</label>
            //             <input
            //                 name="passwordTwo"
            //                 value={passwordTwo}
            //                 onChange={this.onChange}
            //                 type="password"
            //                 placeholder="Confirm Password"
            //             />
            //         </Form.Field>
            //         <Button type='submit' onClick={this.onSubmit} disabled={isInvalid}>Create an account</Button>
            //         {error && <Message error header='Error' content={error.message} />}
            //     </Form>
            // </Container>
        );
    }
}

const SignUpLink = () => (
    <p>
        New to us? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };
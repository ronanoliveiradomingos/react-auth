import React, { Component } from 'react';
import { Container, Header, Table } from 'semantic-ui-react'
import _ from 'lodash'

import { withFirebase } from '../firebase';

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {

      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { users, loading, column, direction } = this.state;

    return (

      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>Admin</Header>
        <p>The Admin Page is accessible by every signed in user.</p>
        <p>
          A text container is used for the main container, which is useful for single column layouts.
      </p>

        {loading && <div>Loading ...</div>}

        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'uid' ? direction : null}
                onClick={this.handleSort('uid')}
              >
                Id
      </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'email' ? direction : null}
                onClick={this.handleSort('email')}
              >
                E-mail
      </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'username' ? direction : null}
                onClick={this.handleSort('username')}
              >
                User name
      </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(users, ({ uid, email, username }) => (
              <Table.Row key={uid}>
                <Table.Cell>{uid}</Table.Cell>
                <Table.Cell>{email}</Table.Cell>
                <Table.Cell>{username}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default withFirebase(AdminPage);
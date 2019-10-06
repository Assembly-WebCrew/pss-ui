import * as React from 'react';
import { Redirect, RouteProps } from 'react-router';
import styled from 'styled-components';
import Button from './Button';
import Input from './Form/Input';
import { StoreState } from '../types';
import { connect } from 'react-redux';
import { login } from '../services/SessionService';
import { Loading } from './Loading';

interface Props extends RouteProps {
  isAuthenticated: boolean;
}

interface State {
  error: boolean;
  loading: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100%;
`;
const Form = styled.div`
  width: 300px;
  border-radius: 34px;
  border: 1px solid #ccc;
  padding: 1em;
  text-align: center;
`;
const Error = styled.p`
  color: red;
  font-size: 0.9em;
  text-align: center;
`;
const LoginButton = styled(Button)`
  width: 90px;
  height: 40px;
  overflow: hidden;
  vertical-align: middle;
  line-height: 40px;

  span {
    padding: 0;
  }
`;

class Login extends React.Component<Props, State> {
  state = { error: false, loading: false };
  public render() {
    const { from } = (this.props.location && this.props.location.state) || {
      from: { pathname: '/' }
    };

    if (this.props.isAuthenticated) {
      return <Redirect to={from} />;
    }

    return (
      <Container>
        <Form>
          <p>Login to Party Schedule Service</p>
          <form onSubmit={this.onSubmit}>
            <Input type="text" placeholder="Username" name="username" required disabled={this.state.loading} />
            <Input type="password" placeholder="Password" name="password" required disabled={this.state.loading} />
            {this.state.error && <Error>An error occurred. Check your username and password.</Error>}
            <p>
              <LoginButton type="submit" disabled={this.state.loading}>
                {this.state.loading ? <Loading /> : 'Log in'}
              </LoginButton>
            </p>
          </form>
        </Form>
      </Container>
    );
  }

  private onSubmit = (event: React.FormEvent<any>) => {
    event.preventDefault();
    this.setState({ loading: true });
    login({
      username: event.currentTarget.elements.username.value,
      password: event.currentTarget.elements.password.value
    }).then(success => {
      if (!success) {
        this.setState({ error: true, loading: false });
      }
    });
  };
}

const mapStateToProps = (state: StoreState) => {
  return {
    isAuthenticated: state.session.isAuthenticated
  };
};

export default connect(mapStateToProps)(Login);

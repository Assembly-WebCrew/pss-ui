import * as React from "react";
import { Redirect, RouteProps } from "react-router";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import { IStoreState, ICredentials } from "../types";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import authActions from "../actions/auth";

interface IProps extends RouteProps {
  isAuthenticated: boolean;
  onLogin: (credentials: ICredentials) => void;
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

class Login extends React.Component<IProps> {
  public render() {
    const { from } = (this.props.location && this.props.location.state) || {
      from: { pathname: "/" }
    };

    if (this.props.isAuthenticated) {
      return <Redirect to={from} />;
    }

    return (
      <Container>
        <Form>
          <p>Login to Party Schedule Service</p>
          <form onSubmit={this.onSubmit}>
            <Input type="text" placeholder="Username" name="username" />
            <Input type="password" placeholder="Password" name="password" />
            <p>
              <Button type="submit">Log in</Button>
            </p>
          </form>
        </Form>
      </Container>
    );
  }

  private onSubmit = (event: React.FormEvent<any>) => {
    event.preventDefault();
    this.props.onLogin({
      username: event.currentTarget.elements.username.value,
      password: event.currentTarget.elements.password.value
    });
  };
}

const mapStateToProps = (state: IStoreState) => {
  return {
    isAuthenticated: state.session.isAuthenticated
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLogin: (credentials: ICredentials) => {
    dispatch(authActions.login(credentials));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

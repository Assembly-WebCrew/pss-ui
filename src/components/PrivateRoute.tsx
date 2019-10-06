import * as React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../types/index';
import { RouteProps, Redirect, Route } from 'react-router';

interface IProps extends RouteProps {
  component: React.ComponentType<any>;
  isAuthenticated: boolean;
}

class PrivateRoute extends React.Component<IProps> {
  public render() {
    const { component: Component, ...rest } = this.props;
    return <Route {...rest} render={props => (this.props.isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)} />;
  }
}

function mapStateToProps(state: StoreState) {
  return {
    isAuthenticated: state.session.isAuthenticated
  };
}

export default connect(mapStateToProps)(PrivateRoute);

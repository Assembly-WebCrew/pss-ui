import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from './logo.svg';
import './Navigation.css';


class Navigation extends React.Component {
  public render() {
    return (
      <div className="navigation">
        <Link to="/" className="logo-link"><img src={logo} className="logo" alt="logo" /></Link>
        <NavLink exact={true} to="/parties/import" title="Import"><i className="material-icons">get_app</i></NavLink>
        <NavLink exact={true} to="/parties/export" title="Export"><i className="material-icons">publish</i></NavLink>
      </div>
    );
  }
}

export default Navigation;

import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import Icon from "../Icon";
import logo from "./logo.svg";

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  height: 100%;
  background-color: #000b19;
  color: white;
  box-shadow: 1px 0 10px #000b19;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited,
  &:active {
    color: white;
    text-decoration: none;
    padding: 10px;
    text-transform: uppercase;
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  &.active {
    color: #32a0ef;
    background-color: rgba(175, 200, 255, 0.1);
  }

  &:hover {
    background-color: rgba(175, 200, 255, 0.2);
  }
`;

const LogoLink = styled(Link)`
  &:link,
  &:visited,
  &:active {
    color: white;
    text-decoration: none;
    padding: 10px;
    text-transform: uppercase;
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-bottom: 10px;
  }

  &:hover {
    background-color: transparent;
  }

  img.logo {
    height: 60px;
    width: 60px;
    padding: 3px;
  }
`;

class Navigation extends React.Component {
  public render() {
    return (
      <StyledNavigation>
        <LogoLink to="/">
          <img src={logo} className="logo" alt="logo" />
        </LogoLink>
        <StyledNavLink exact={true} to="/parties/import" title="Import">
          <Icon>get_app</Icon>
        </StyledNavLink>
        <StyledNavLink exact={true} to="/parties/export" title="Export">
          <Icon>publish</Icon>
        </StyledNavLink>
      </StyledNavigation>
    );
  }
}

export default Navigation;

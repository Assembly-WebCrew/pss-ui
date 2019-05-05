import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import Icon from "../Icon";
import logo from "./logo.svg";
import Button from "../Button";
import { StoreState } from "../../types";
import { connect } from "react-redux";
import { logout } from "../../services/api";

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100%;
  background-color: #000b19;
  background: linear-gradient(45deg, #112663, #32a0ef, #000b19);
  color: white;
  box-shadow: 1px 0 10px rgba(0, 0, 0, 0.3);
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited,
  &:active {
    color: white;
    text-decoration: none;
    padding: 10px;
    text-transform: uppercase;
    height: 100%;
    width: auto;
    min-width: 60px;
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
    height: 100%;
    width: 60px;
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

const Text = styled.span`
  padding-left: 10px;
  text-transform: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  padding: 0 10px;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logout = styled(Button)`
  height: 50px;
  color: white;
`;

interface NavigationProps {
  isAuthenticated: boolean;
}

class Navigation extends React.Component<NavigationProps> {
  onLogout = () => {
    logout();
  };

  public render() {
    return (
      <StyledNavigation>
        <LogoLink to="/">
          <img src={logo} className="logo" alt="logo" />
        </LogoLink>
        {this.props.isAuthenticated && (
          <Container>
            <NavContainer>
              <StyledNavLink exact={true} to="/parties/import" title="Import">
                <Icon>get_app</Icon>
                <Text>Import party</Text>
              </StyledNavLink>
              <StyledNavLink exact={true} to="/parties/export" title="Export">
                <Icon>publish</Icon>
                <Text>Export party</Text>
              </StyledNavLink>
            </NavContainer>
            <Logout onClick={this.onLogout}>Logout</Logout>
          </Container>
        )}
      </StyledNavigation>
    );
  }
}

function mapStateToProps(state: StoreState) {
  return {
    isAuthenticated: state.session.isAuthenticated
  };
}

export default connect(mapStateToProps)(Navigation);

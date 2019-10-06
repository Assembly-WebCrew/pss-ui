import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router';
import styled from 'styled-components';

import Icon from '../Icon';
import logo from './logo.svg';
import Button from '../Button';
import { StoreState } from '../../types';
import { connect } from 'react-redux';
import { logout } from '../../services/SessionService';
import { exportEvents } from '../../services/EventService';

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

const exportParty = (eventName: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  exportEvents(eventName);
};

interface Props extends RouteComponentProps {
  isAuthenticated: boolean;
}

class Navigation extends React.Component<Props> {
  public render() {
    const navLinks = [];
    let logoutButton = null;

    if (this.props.isAuthenticated) {
      logoutButton = <Logout onClick={logout}>Logout</Logout>;
      navLinks.push(
        <StyledNavLink key="import" to="/import" title="Import">
          <Icon>get_app</Icon>
          <Text>Import party</Text>
        </StyledNavLink>
      );
      if (this.props.location.pathname.match(/\/parties\/.+/)) {
        // A party is selected
        const party = this.props.location.pathname.split('/')[2];
        navLinks.push(
          <StyledNavLink key="export" onClick={e => exportParty(party, e)} to="" title="Export">
            <Icon>publish</Icon>
            <Text>Export party</Text>
          </StyledNavLink>
        );
      }
    }

    return (
      <StyledNavigation>
        <LogoLink to="/">
          <img src={logo} className="logo" alt="logo" />
        </LogoLink>
        <Container>
          <NavContainer>{navLinks}</NavContainer>
          {logoutButton}
        </Container>
      </StyledNavigation>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  isAuthenticated: state.session.isAuthenticated
});

export default withRouter(connect(mapStateToProps)(Navigation));

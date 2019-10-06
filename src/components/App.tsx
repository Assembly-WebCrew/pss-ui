import * as React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Login from "./Login";
import Navigation from "./Navigation/Navigation";
import Import from "./Import";
import Parties from "./Party/Parties";
import Party from "./Party/Party";
import PrivateRoute from "./PrivateRoute";
import Modal from "react-modal";
import PartyEvent from "./Party/Event";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const AppContent = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 10px 20px;
`;

Modal.setAppElement("#root");

export default class App extends React.Component {
  public render() {
    return (
      <Router>
        <StyledApp>
          <Navigation />
          <AppContent>
            <Switch>
              <PrivateRoute exact path="/parties" component={Parties} />
              <PrivateRoute exact path="/import" component={Import} />
              <PrivateRoute exact path="/parties/:party" component={Party} />
              <PrivateRoute exact path="/parties/:party/:event" component={PartyEvent} />
              <Route exact path="/login" component={Login} />
              <Redirect from="/" to="/parties" push={true} />
              {/* This must be last, it redirects anything else to the front page. Posssibly a "not found error" in the future */}
              <Redirect to="/" />
            </Switch>
          </AppContent>
        </StyledApp>
      </Router>
    );
  }
}

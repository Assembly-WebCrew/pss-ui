import * as React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import styled from "styled-components";
import Login from "./Login";
import Navigation from "./Navigation/Navigation";
import NotImplemented from "./NotImplemented";
import Parties from "./Party/Parties";
import Party from "./Party/Party";
import PrivateRoute from "./PrivateRoute";

const StyledApp = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

const AppContent = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 10px 20px;
`;

class App extends React.Component {
  public render() {
    return (
      <Router>
        <StyledApp>
          <Navigation />
          <AppContent>
            <Switch>
              <PrivateRoute exact={true} path="/parties" component={Parties} />
              <PrivateRoute path="/parties/import" component={NotImplemented} />
              <PrivateRoute path="/parties/export" component={NotImplemented} />
              <PrivateRoute path="/parties/:party" component={Party} />
              <Route path="/login" component={Login} />
              <Redirect from="/" to="/parties" push={true} />
            </Switch>
          </AppContent>
        </StyledApp>
      </Router>
    );
  }
}

export default App;

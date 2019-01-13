import * as React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import styled from "styled-components";
import Navigation from "./Navigation/Navigation";
import NotImplemented from "./NotImplemented";
import Parties from "./Party/Parties";
import Party from "./Party/Party";

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
              <Route exact={true} path="/parties" component={Parties} />
              <Route path="/parties/import" component={NotImplemented} />
              <Route path="/parties/export" component={NotImplemented} />
              <Route path="/parties/:party" component={Party} />
              <Redirect from="/" to="/parties" push={true} />
            </Switch>
          </AppContent>
        </StyledApp>
      </Router>
    );
  }
}

export default App;

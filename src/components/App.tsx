import * as React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import NotImplemented from './NotImplemented/NotImplemented';
import Parties from './Parties/Parties';
import Party from './Party/Party';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <div className="App-content">
            <Switch>
              <Route exact={true} path="/parties" component={Parties} />
              <Route path="/parties/import" component={NotImplemented} />
              <Route path="/parties/export" component={NotImplemented} />
              <Route path="/parties/:party" component={Party} />
              <Redirect from="/" to="/parties" push={true} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

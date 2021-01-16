import React from 'react'
import '../style/App.css';
import {Route, Switch } from 'react-router-dom';
import Landing from './Landing'
import SignIn from './SignIn'
import Dashboard from './Dashboard'

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/signin" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
        {/*<Route path="/browse" component={Browse} />
  */}
      </Switch>
    </main>
  );
}

export default App;

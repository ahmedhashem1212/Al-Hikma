import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Login from './Login.js'
import Register from './Register.js'
function UnauthenticatedApp() {
  // return <Authentication />;
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/register" component={Login} /> */}
        <Route component={Register} />
      </Switch>
    </BrowserRouter>
  );

}

export default UnauthenticatedApp

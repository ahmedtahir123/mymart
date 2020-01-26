import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from '../src/containers/Home'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={Home} />
      </Switch>
    </div>
  );
};

export default Routes;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import NotFound from './Errors/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>

      { /* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;

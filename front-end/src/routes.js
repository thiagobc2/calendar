import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page1 from './component/Page1';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Page1}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
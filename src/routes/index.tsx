import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Search from '../pages/Search';
import Details from '../pages/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Search} />
    <Route path="/details/:id" component={Details} />
    {/* <Route path="/details/:id" component={Details} /> */}
  </Switch>
);
export default Routes;

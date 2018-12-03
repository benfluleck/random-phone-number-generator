/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Route - index
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routingAsObject as route } from './routing';
import HomePage from './HomePage';
import ResultsPage from './ResultsPage';


const BaseRoutes = () => (
  <Switch>
    <Route exact path={route.home.path} component={HomePage} />
    <Route exact path={route.results.path} component={ResultsPage} />
  </Switch>
);

export default BaseRoutes;

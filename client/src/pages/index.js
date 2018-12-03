/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Route - index
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { routingAsObject as route } from './routing'
import HomePage from '../pages/HomePage'


const BaseRoutes = () => (
  <Switch>
    <Route exact path={route.home.path} component={HomePage} />
  </Switch>
);

export default BaseRoutes

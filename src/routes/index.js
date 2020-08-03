import Layout from 'components/UI/Layout'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import loadable from 'utils/loadable'
import PrivateRoute from './PrivateRoute'

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path="/login"
          component={loadable(import('../pages/Login'))}
          exact
        />
        <PrivateRoute
          path="/"
          component={loadable(import('../pages/Home'))}
          exact
        />
        <Route path="*" component={loadable(import('../pages/Page404'))} />
      </Switch>
    </Layout>
  )
}

export default Routes

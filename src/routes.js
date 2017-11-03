import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/login'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      // logic to know if user is authenticated
      const user = localStorage.getItem('user')

      return !!user ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }}
  />
)

const routes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Home} />
    <Route path="/login" component={Login} />
  </Switch>
)

export default routes

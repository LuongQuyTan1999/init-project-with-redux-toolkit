/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import useRouter from 'hooks/useRouter'

const PrivateRoute = ({ path, component, ...rest }) => {
  const isAuth = useSelector((state) => state.auth.isAuth)
  const { location } = useRouter()
  if (!isAuth) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location },
        }}
      />
    )
  }
  return <Route path={path} component={component} {...rest} />
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.any.isRequired,
}

export default PrivateRoute

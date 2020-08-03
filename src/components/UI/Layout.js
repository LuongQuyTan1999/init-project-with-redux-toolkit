import { Alert } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'
import PrivateLayout from './PrivateLayout'

const Layout = ({ children }) => {
  const isAuth = useSelector((state) => state.auth.isAuth)
  if (isAuth) {
    return <PrivateLayout>{children}</PrivateLayout>
  }
  return <Alert.ErrorBoundary>{children}</Alert.ErrorBoundary>
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout

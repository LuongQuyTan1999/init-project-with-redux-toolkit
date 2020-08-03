import React from 'react'
// import Header from 'components/UI/Header'
import { Layout, Alert } from 'antd'
import PropTypes from 'prop-types'

const PrivateLayout = ({ children }) => {
  return (
    <Layout className="h-full">
      {/* <Header /> */}
      <Alert.ErrorBoundary>{children}</Alert.ErrorBoundary>
    </Layout>
  )
}

PrivateLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default PrivateLayout

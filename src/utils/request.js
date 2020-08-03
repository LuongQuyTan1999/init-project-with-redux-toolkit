import axios from 'axios'
import actions from 'redux/actions'
import { push } from 'connected-react-router'
import store from '../store'

const logger = (error) => {
  console.error('Request Failed:', error.config)
  if (error.response) {
    console.error('Status:', error.response.status)
    console.error('Data:', error.response.data)
    console.error('Headers:', error.response.headers)
  } else {
    console.error('Error Message:', error.message)
  }
}

const request = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
})

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('sessionToken')
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error.response || error.message)
  },
)

request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    logger(error)
    if (error.response.status === 401) {
      store.dispatch(actions.auth.logout())
    }
    if (error.response.status === 404) {
      store.dispatch(push('*'))
    }
    return Promise.reject(error.response || error.message)
  },
)

export default request

import { createSlice } from '@reduxjs/toolkit'

export const { actions, reducer } = createSlice({
  name: 'Auth',
  initialState: {
    isAuth: !!localStorage.getItem('sessionToken'),
    loading: null,
  },
  reducers: {
    login: (state) => {
      state.loading = 'login'
    },
    loginFailure: (state) => {
      state.isAuth = false
      state.loading = null
    },
    loginSuccess: (state, { payload }) => {
      localStorage.setItem('sessionToken', payload.token.accessToken)
      localStorage.setItem('userId', payload.user.id)
      state.isAuth = true
      state.loading = null
    },
    updatePassword: (state) => {
      state.loading = 'updatePassword'
    },
    updatePasswordSuccess: (state) => {
      state.loading = null
    },
    updatePasswordFailure: (state) => {
      state.loading = null
    },
    logout: (state) => {
      state.isAuth = false
      localStorage.removeItem('sessionToken')
    },
  },
})

export default reducer

import { Button, Form, notification } from 'antd'
import RestInputPassword from 'components/Rest/RestInputPassword'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from 'redux/actions'
import { validateRegex } from 'utils/validateUtils'
import styled from 'styled-components'
import RestInput from '../Rest/RestInput'

const StyledLoginForm = styled(Form)`
  .title {
    margin-bottom: 15px;
  }
  && {
    .ant-form-item-label > label.ant-form-item-required::before {
      display: none;
    }
  }
`

function LoginForm() {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.auth)
  const handleSubmit = (values) => {
    dispatch(
      actions.auth.login({
        data: values,
      }),
    )
  }

  const onFinishFailed = () => {
    notification.error({
      message: 'Không hợp lệ',
    })
  }

  return (
    <StyledLoginForm onFinish={handleSubmit} onFinishFailed={onFinishFailed}>
      <p className="text-title text-500-14-22 title">Đăng nhập</p>
      <RestInput
        fieldName="email"
        label="label"
        required
        messageRequire="messageRequire"
        messageValidate="messageValidate"
        pattern={validateRegex.email}
        placeholder="placeholder"
      />
      <RestInputPassword
        fieldName="password"
        label="labelPassword"
        messageRequire="messageRequirePassword"
        messageValidate="messageValidatePassword"
        placeholder="placeholderPassword"
        type="password"
      />
      <Button htmlType="submit" type="primary" loading={loading === 'login'}>
        Đăng nhập
      </Button>
    </StyledLoginForm>
  )
}

export default LoginForm

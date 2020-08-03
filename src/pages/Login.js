import LoginForm from 'components/Auth/LoginForm'
import useAuth from 'hooks/useAuth'
import React from 'react'
import styled from 'styled-components'

export const Image = styled.img`
  margin-bottom: 30px;
  height: 32px;
`

export const LeftColumn = styled.div`
  flex: 1;
  align-items: flex-end;
  display: none;
  @media only screen and (min-width: 992px) {
    display: flex;
  }
  .title {
    margin-bottom: 10px;
  }
`

export const RightColumn = styled.div`
  width: 100%;
  background: #fff;
  padding: 80px 16px;
  .ant-form-item-explain {
    margin: 10px 0px 24px 0px;
  }
  @media only screen and (min-width: 992px) {
    width: 495px;
    padding: 80px 70px;
  }
`

export const Info = styled.div`
  padding: 0px 0px 30px 20px;
  width: 100%;
  .title {
    margin-bottom: 12px;
  }
  .subtitle {
    margin-bottom: 16px;
  }
  .author {
    color: #7e8994;
  }
`

function Login() {
  useAuth()
  return (
    <div className="flex h-screen">
      <LeftColumn>
        <Info>
          <h2 className="text-500-24-40 title ">Stay hungry, stay foolish.</h2>
          <p className="text-16-22 subtitle">
            <b className="author">Steve Jobs</b> - Apple&apos;s CEO
          </p>
        </Info>
      </LeftColumn>
      <RightColumn>
        <Image src="" alt="MyTan" />
        <LoginForm />
      </RightColumn>
    </div>
  )
}

export default Login

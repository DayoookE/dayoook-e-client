import { Title } from '../../assets/LoginPage'
import * as s from './Login.style'
import { Email, Password } from '../../assets/LoginPage'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function Login({ setIsLogin, setIsTutor }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SPRING_API_URL}/auth/login`,
        {
          email: email,
          password: password,
        }
      )

      const { accessToken, role } = response.data.result

      localStorage.setItem('dayookeAccessToken', accessToken)
      localStorage.setItem('dayookeUserRole', role)

      setIsLogin(true)
      setIsTutor(role === 'TUTOR')
      if (response.data.result.role === 'TUTEE') {
        createNewChatAssistant(response.data.result.accessToken)
        createNewReviewAssistant(response.data.result.accessToken)
      }
      navigate('/')
    } catch (error) {
      console.error('로그인 실패:', error)
      setError('이메일 또는 비밀번호가 올바르지 않습니다.')
    }
  }

  const createNewChatAssistant = async (token) => {
    //  get /chat/create
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_FAST_API_URL}/chat/create`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      console.log('채팅 어시스턴트 생성 성공:', response)
    } catch (error) {
      console.error('채팅 어시스턴트 생성 실패:', error)
    }
  }

  const createNewReviewAssistant = async (token) => {
    //  get /review/create
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_FAST_API_URL}/review/create`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      console.log('리뷰 어시스턴트 생성 성공:', response)
    } catch (error) {
      console.error('리뷰 어시스턴트 생성 실패:', error)
    }
  }

  return (
    <s.LoginContainer>
      <Title />
      <s.Form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <SearchInput
          type="password"
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        {error && <s.ErrorMessage>{error}</s.ErrorMessage>}
        <button type="submit">로그인 하기</button>
      </s.Form>
      <s.LinkContainer>
        <a href="/">비밀번호를 잊으셨나요?</a>
        <a href="/">회원가입 하러 가기</a>
      </s.LinkContainer>
    </s.LoginContainer>
  )
}

const SearchInput = ({ type, email, password, setEmail, setPassword }) => {
  return (
    <s.InputContainer>
      <s.Icon src={type === 'text' ? Email : Password} alt="Icon" />
      <s.Input
        type={type}
        defaultValue={type === 'text' ? email : password}
        onChange={(e) => {
          if (type === 'text') {
            setEmail(e.target.value)
          } else {
            setPassword(e.target.value)
          }
        }}
        placeholder={
          type === 'text' ? '이메일을 입력해주세요' : '비밀번호를 입력해주세요'
        }
      />
    </s.InputContainer>
  )
}

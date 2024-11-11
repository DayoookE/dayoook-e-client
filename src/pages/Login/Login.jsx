import { Title } from '../../assets/LoginPage'
import * as s from './Login.style'
import { Email, Password } from '../../assets/LoginPage'

export default function Login() {
  return (
    <s.LoginContainer>
      <Title />
      <s.Form>
        <SearchInput type="text" />
        <SearchInput type="password" />
        <button type="submit">로그인 하기</button>
      </s.Form>
      <s.LinkContainer>
        <a href="/">비밀번호를 잊으셨나요?</a>
        <a href="/">회원가입 하러 가기</a>
      </s.LinkContainer>
    </s.LoginContainer>
  )
}

const SearchInput = ({ type }) => {
  return (
    <s.InputContainer>
      <s.Icon src={type == 'text' ? Email : Password} alt="Icon" />
      <s.Input
        type={type}
        placeholder={
          type == 'text' ? '이메일을 입력해주세요' : '비밀번호를 입력해주세요'
        }
      />
    </s.InputContainer>
  )
}

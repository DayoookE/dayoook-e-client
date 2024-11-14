import { EnterGreen } from '../../../assets/MainPage'
import { useNavigate } from 'react-router'
import { Title } from '../Main.style'
import * as s from './Home.style'

export default function Home() {
  return (
    <s.HomeContainer>
      <Title>다육e 홈</Title>
      <s.HomeContent>
        <s.HomeTitle>안녕, 다유기야!</s.HomeTitle>
        <s.HomeSubtitle>오늘은 어떤 공부를 할 거야?</s.HomeSubtitle>
        <Enter text="수강 수업 확인하기" link="/tutorlist" />
        <Enter text="복습 하러 가기" link="/tutorlist" />
      </s.HomeContent>
    </s.HomeContainer>
  )
}

const Enter = ({ text, link }) => {
  const navigate = useNavigate()

  return (
    <s.EnterContainer onClick={() => navigate(link)}>
      <img src={EnterGreen} alt="Enter" />
      <div>{text}</div>
    </s.EnterContainer>
  )
}

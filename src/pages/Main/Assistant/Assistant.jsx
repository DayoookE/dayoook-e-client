import { useNavigate } from 'react-router'
import { EnterRightGray, EnterRightWhite } from '../../../assets/MainPage'
import { Hi3D, Clap3D, Sweat3D } from '../../../assets/icon3D'
import { Title } from '../Main.style'
import * as s from './Assistant.style'

export default function Assistant() {
  return (
    <s.AssistantContainer>
      <Title>학습 도우미</Title>
      <s.AssistantList>
        {assistantList.map((assistant, index) => (
          <AssistantItem key={index} {...assistant} />
        ))}
      </s.AssistantList>
    </s.AssistantContainer>
  )
}

const AssistantItem = ({ icon, title, subtitle, content, link, alarm }) => {
  const navigate = useNavigate()

  return (
    <s.AssistantItemContainer alarm={alarm}>
      <img src={icon} alt="icon" />
      <s.AssistantText>
        <s.AssistantTitle>{title}</s.AssistantTitle>
        <s.AssistantContentContainer>
          <s.AssistantSubtitle>{subtitle}</s.AssistantSubtitle>
          <s.AssistantContent>{content}</s.AssistantContent>
        </s.AssistantContentContainer>
      </s.AssistantText>
      {link && (
        <s.EnterIcon
          src={alarm ? EnterRightWhite : EnterRightGray}
          alt="Enter"
          onClick={() => navigate(link)}
        />
      )}
    </s.AssistantItemContainer>
  )
}

const assistantList = [
  {
    icon: Hi3D,
    title: '여경래 튜터의 수업이 곧 시작해요!',
    subtitle: '수업 시작 시간',
    content: '10월 15일 오후 7시 30분',
    link: '/tutorlist',
    alarm: true,
  },
  {
    icon: Clap3D,
    title: '출석률이 아주 좋아요!',
    subtitle: '이번달 결석 횟수',
    content: '0회',
  },
  {
    icon: Sweat3D,
    title: '복습을 하면 더 좋을 것 같아요',
    subtitle: '복습률',
    content: '50%',
    link: '/tutorlist',
  },
  {
    icon: Clap3D,
    title: '출석률이 아주 좋아요!',
    subtitle: '이번달 결석 횟수',
    content: '0회',
  },
  {
    icon: Sweat3D,
    title: '복습을 하면 더 좋을 것 같아요',
    subtitle: '복습률',
    content: '50%',
    link: '/tutorlist',
  },
]

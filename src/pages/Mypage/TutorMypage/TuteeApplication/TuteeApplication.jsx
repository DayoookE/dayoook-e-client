import { FlowerIcon, LeafIcon, FruitIcon } from '../../../../assets/level'
import { EnterClassIcon, ExitClassIcon } from '../../../../assets/Mypage/Tutor'
import * as s from './TuteeApplication.style'

export default function TuteeApplication() {
  return (
    <s.MyTuteeWrapper>
      <s.Title>✏️&nbsp;&nbsp;나의 튜티</s.Title>
      <s.ListWrapper>
        {tuteeList.map((tutee) => (
          <TuteeItem tutee={tutee} />
        ))}
      </s.ListWrapper>
    </s.MyTuteeWrapper>
  )
}

const TuteeItem = ({ tutee }) => {
  return (
    <s.TuteeItemWrapper>
      <img src={tutee.img} />
      <s.InfoWrapper>
        <div>{tutee.name}</div>
        <div>{tutee.level}</div>
      </s.InfoWrapper>
      <s.DetailWrapper>
        <s.ReviewDiv review={tutee.review}>
          {tutee.review ? '복습 완료' : '복습하기'}
        </s.ReviewDiv>
        <div>다음 수업: {tutee.nextClass}</div>
      </s.DetailWrapper>
      <s.EnterImg
        src={tutee.classOpen ? ExitClassIcon : EnterClassIcon}
        alt="수업가기"
      />
    </s.TuteeItemWrapper>
  )
}

const tuteeList = [
  {
    name: '양희령 튜티',
    img: FruitIcon,
    review: true,
    level: '열매 학생',
    nextClass: '10월 15일 오후 3시',
    classOpen: true,
  },
  {
    name: '황규혁 튜티',
    img: FlowerIcon,
    review: true,
    level: '꽃 학생',
    nextClass: '10월 18일 오전 9시',
    classOpen: false,
  },
  {
    name: '박준용 튜티',
    img: LeafIcon,
    review: false,
    level: '잎 학생',
    nextClass: '10월 15일 오후 3시',
    classOpen: false,
  },
  {
    name: '양희령 튜티',
    img: FruitIcon,
    review: true,
    level: '열매 학생',
    nextClass: '10월 15일 오후 3시',
    classOpen: false,
  },
  {
    name: '황규혁 튜티',
    img: FlowerIcon,
    review: true,
    level: '꽃 학생',
    nextClass: '10월 18일 오전 9시',
    classOpen: false,
  },
  {
    name: '박준용 튜티',
    img: LeafIcon,
    review: false,
    level: '잎 학생',
    nextClass: '10월 15일 오후 3시',
    classOpen: false,
  },
  {
    name: '양희령 튜티',
    img: FruitIcon,
    review: true,
    level: '열매 학생',
    nextClass: '10월 15일 오후 3시',
    classOpen: false,
  },
  {
    name: '황규혁 튜티',
    img: FlowerIcon,
    review: true,
    level: '꽃 학생',
    nextClass: '10월 18일 오전 9시',
    classOpen: false,
  },
  {
    name: '박준용 튜티',
    img: LeafIcon,
    review: false,
    level: '잎 학생',
    nextClass: '10월 15일 오후 3시',
    classOpen: false,
  },
]

import TutorSelect from '../TutorSelect/TutorSelect'
import { DotIcon, StarIcon } from '../../../assets/icon'
import { Face1, Face2, Face3, Face4 } from '../../../assets/face'
import * as s from './TutorList.style'
import {useEffect} from "react";

export default function TutorList({ isRecommend, setIsRecommend, recommendTutors }) {
  useEffect(() => {
    // TODO
  }, [recommendTutors])

  return (
    <s.TutorListContentContainer>
      {/* 튜터 필터링 선택 */}
      <TutorSelect isRecommend={isRecommend} setIsRecommend={setIsRecommend} />
      {/* 카드 리스트 */}
      <s.Cards>
        {cards.map((card, idx) => (
          <Card key={idx} card={card} />
        ))}
      </s.Cards>
    </s.TutorListContentContainer>
  )
}

const Card = ({ card }) => {
  return (
    <s.CardContainer>
      <s.CardTop>
        <div>
          {Array.from({ length: card.star }, (_, idx) => (
            <img key={idx} src={StarIcon} alt="star" />
          ))}
        </div>
        <img src={DotIcon} alt="dot" />
      </s.CardTop>
      <s.TutorImg src={card.userImg} alt="user" />
      <s.TutorName>{card.name}</s.TutorName>
      <s.TuteeAge>
        <div>튜티 주 연령</div>
        <div>{card.studentAge}</div>
      </s.TuteeAge>
      <s.TutorLang>{card.lang}</s.TutorLang>
      <s.ApplyButton>튜티 신청하기</s.ApplyButton>
    </s.CardContainer>
  )
}

const cards = [
  {
    name: '백종원',
    studentAge: '영유아, 10대',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 5,
    userImg: Face1,
  },
  {
    name: '이은지',
    studentAge: '영유아',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 4,
    userImg: Face2,
  },
  {
    name: '최강록',
    studentAge: '영유아, 20대',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 5,
    userImg: Face3,
  },
  {
    name: '에드워드 리',
    studentAge: '10대, 20대',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 5,
    userImg: Face4,
  },
  {
    name: '이연복',
    studentAge: '영유아, 10대',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 5,
    userImg: Face1,
  },
  {
    name: '정지선',
    studentAge: '영유아',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 3,
    userImg: Face2,
  },
  {
    name: '백종원',
    studentAge: '영유아, 10대',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 5,
    userImg: Face3,
  },
  {
    name: '이은지',
    studentAge: '영유아',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 5,
    userImg: Face4,
  },
  {
    name: '최강록',
    studentAge: '영유아, 20대',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 3,
    userImg: Face1,
  },
  {
    name: '에드워드 리',
    studentAge: '10대, 20대',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 4,
    userImg: Face2,
  },
  {
    name: '이연복',
    studentAge: '영유아, 10대',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 5,
    userImg: Face3,
  },
  {
    name: '정지선',
    studentAge: '영유아',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 4,
    userImg: Face4,
  },
  {
    name: '백종원',
    studentAge: '영유아, 10대',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 5,
    userImg: Face1,
  },
  {
    name: '이은지',
    studentAge: '영유아',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 5,
    userImg: Face2,
  },
  {
    name: '최강록',
    studentAge: '영유아, 20대',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 4,
    userImg: Face3,
  },
  {
    name: '에드워드 리',
    studentAge: '10대, 20대',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 5,
    userImg: Face4,
  },
  {
    name: '이연복',
    studentAge: '영유아, 10대',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 5,
    userImg: Face1,
  },
  {
    name: '정지선',
    studentAge: '영유아',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 5,
    userImg: Face2,
  },
  {
    name: '백종원',
    studentAge: '영유아, 10대',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 5,
    userImg: Face3,
  },
  {
    name: '이은지',
    studentAge: '영유아',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 3,
    userImg: Face4,
  },
  {
    name: '최강록',
    studentAge: '영유아, 20대',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 5,
    userImg: Face1,
  },
  {
    name: '에드워드 리',
    studentAge: '10대, 20대',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 5,
    userImg: Face2,
  },
  {
    name: '이연복',
    studentAge: '영유아, 10대',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 5,
    userImg: Face3,
  },
  {
    name: '정지선',
    studentAge: '영유아',
    lang: '🇰🇷  🇨🇳  🇷🇺  🇻🇳  🇵🇭',
    star: 5,
    userImg: Face4,
  },
]

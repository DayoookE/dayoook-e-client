import { Link } from 'react-router-dom'
import {
  ByeoljuImg,
  FairyImg,
  GyeonWooImg,
  HeungbuImg,
  SimcheongImg,
  HeartIcon,
  HeartWhite,
} from '../../../assets/FairyList'
import * as s from './FairyList.style'

export default function FairyList({ setPageState }) {
  return (
    <s.FairyListContainer>
      {koFairyList.map((fairy) => (
        <s.BookItem>
          {/* 동화 표지 */}
          <Link
            onClick={() => setPageState('fairyRead')}
            to={`/study/fairyread/${fairy.url}`}
          >
            <s.FairyBookCover percent={fairy.percent}>
              <s.BookImgCover>
                <img src={fairy.img} alt="img" />
              </s.BookImgCover>
            </s.FairyBookCover>
          </Link>

          {/* 동화 이름 */}
          <s.BookInfoContainer titleColor={fairy.titleColor}>
            <div>{fairy.title}</div>
            <img src={fairy.heart ? HeartIcon : HeartWhite} alt="heart" />
          </s.BookInfoContainer>
        </s.BookItem>
      ))}
    </s.FairyListContainer>
  )
}

const koFairyList = [
  {
    title: '견우와 직녀',
    img: GyeonWooImg,
    heart: true,
    percent: 90,
    titleColor: '#4EB1A6',
    url: 'gyeonwoo',
  },
  {
    title: '별주부전',
    img: ByeoljuImg,
    heart: false,
    percent: 30,
    titleColor: '#4A84BD',
    url: 'byeolju',
  },
  {
    title: '흥부와 놀부',
    img: HeungbuImg,
    heart: false,
    percent: 50,
    titleColor: '#31ADE7',
    url: 'heungbu',
  },
  {
    title: '심청전',
    img: SimcheongImg,
    heart: true,
    percent: 70,
    titleColor: '#EE696F',
    url: 'simcheong',
  },
  {
    title: '선녀와 나무꾼',
    img: FairyImg,
    heart: false,
    percent: 10,
    titleColor: '#FC9230',
    url: 'fairy',
  },
]

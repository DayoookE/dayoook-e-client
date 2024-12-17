import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import {
  DashboardGreen,
  GradeInfo,
  MyImgIcon,
  MypageWhiteIcon,
  SetInfoIcon,
  TutorIcon,
} from '../../../assets/Mypage'
import { SproutIcon } from '../../../assets/level'
import 'react-circular-progressbar/dist/styles.css'
import * as s from './MyInfo.style'
import styled from 'styled-components'
import { Face1 } from '../../../assets/face'
import { StarIcon } from '../../../assets/icon'
import axios from 'axios'

const getLevelName = (level) => {
  const levelMapping = {
    SEEDLING: '새싹',
    STEM: '줄기',
    LEAF: '잎',
    FLOWER: '꽃',
    FRUIT: '열매',
  }
  return levelMapping[level] || '알 수 없음'
}

const getLanguage = (language) => {
  const languageMapping = {
    대한민국: '🇰🇷',
    중국: '🇨🇳',
    베트남: '🇻🇳',
    영어: '🇺🇸',
    러시아: '🇷🇺',
    필리핀: '🇵🇭',
  }
  return languageMapping[language] || '🇰🇷'
}

const ProgressProvider = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = useState(valueStart)
  useEffect(() => {
    setValue(valueEnd)
  }, [valueEnd])

  return children(value)
}

export default function MyInfo() {
  const isTutor = localStorage.getItem('dayookeUserRole') === 'TUTOR'
  const [userInfo, setUserInfo] = useState(null)
  const [userDetail, setUserDetail] = useState(null)

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('dayookeAccessToken')
        if (!token) {
          setUserInfo(null)
          return
        }
        const response = await axios.get(
          `${process.env.REACT_APP_SPRING_API_URL}/users/info`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        setUserInfo(response.data.result)
        if (response.data.result.role === 'TUTOR') {
          fetchTutorInfo(response.data.result.id)
        }
      } catch (error) {
        console.error('유저 정보 조회 실패:', error)
        setUserInfo(null)
      }
    }
    fetchUserInfo()
  }, [])

  // get /tutors/{tutorId}
  const fetchTutorInfo = async (tutorId) => {
    try {
      const token = localStorage.getItem('dayookeAccessToken')
      if (!token) {
        return
      }
      const response = await axios.get(
        `${process.env.REACT_APP_SPRING_API_URL}/tutors/${tutorId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      setUserDetail(response.data.result)
    } catch (error) {
      console.error('튜터 정보 조회 실패:', error)
    }
  }

  return (
    <s.MyInfoContainer isTutor={isTutor}>
      {/* 유저 정보 상단바 */}
      <s.MyInfoTitleWrapper>
        <s.Title>나의 정보</s.Title>
        <img src={SetInfoIcon} alt="설정" />
      </s.MyInfoTitleWrapper>

      {/* 유저 프로필 */}
      {isTutor ? (
        <TutorProfileWrapper>
          <img src={MyImgIcon} alt="프로필" />
        </TutorProfileWrapper>
      ) : (
        <s.ProfileWrapper>
          <img src={MyImgIcon} alt="프로필" />
          <ProgressProvider
            valueStart={0}
            valueEnd={userInfo?.attendanceRate || 0}
          >
            {(value) => (
              <CircularProgressbar
                value={value}
                strokeWidth={6}
                styles={buildStyles({
                  pathColor: '#6ED372',
                  trailColor: 'none',
                })}
              />
            )}
          </ProgressProvider>
        </s.ProfileWrapper>
      )}

      {/* 유저 이름 */}
      {isTutor ? (
        <s.MyInfoNameWrapper isTutor={isTutor}>
          <s.MyName>{userInfo?.name || '튜터'}</s.MyName>
          <div>튜터</div>
        </s.MyInfoNameWrapper>
      ) : (
        <s.MyInfoNameWrapper>
          <img src={SproutIcon} alt="새싹" />
          <div>
            <s.MyName>{userInfo?.name || '학생'}</s.MyName>
            <div>{getLevelName(userInfo?.level) + ' 학생' || '새싹 학생'}</div>
          </div>
        </s.MyInfoNameWrapper>
      )}

      {isTutor ? (
        <TutorDetailInfoContainer>
          {/* 하드코딩된 튜터 상세 정보 */}
          {tutorDetailInfo.map((info, idx) => (
            <TutorDetailItem key={idx} type={info.title}>
              <div>{info.title}</div>
              <div>
                {info.title === '튜터 소개'
                  ? userDetail?.introduction?.split('\n').map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))
                  : info.title === '튜터 평점'
                  ? Array.from(
                      {
                        length: userDetail?.rating > 0 ? userDetail?.rating : 1,
                      },
                      (_, idx) => <img key={idx} src={StarIcon} alt="별" />
                    )
                  : info.title === '경력'
                  ? userDetail?.experiences.map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))
                  : userDetail?.languages.map((language, idx) => (
                      <span key={idx}>{getLanguage(language.name)}&nbsp;</span>
                    ))}
              </div>
            </TutorDetailItem>
          ))}
        </TutorDetailInfoContainer>
      ) : (
        <>
          {/* 유저 상세 정보 */}
          <s.DetailInfoWrapper>
            <s.DetailInfoContainer>
              <img src={GradeInfo} alt="학년" />
              <div>{userInfo?.age || '학년 정보 없음'}</div>
            </s.DetailInfoContainer>
            <s.DetailInfoContainer tutor>
              <img src={TutorIcon} alt="튜터" />
              <div>{userInfo?.mentor || '튜터 정보 없음'}</div>
            </s.DetailInfoContainer>
          </s.DetailInfoWrapper>

          {/* 마이페이지 버튼 */}
          <s.MypageBtnWrapper>
            <s.MypageBtn mypage>
              <img src={MypageWhiteIcon} alt="마이페이지" />
              <div>마이페이지</div>
            </s.MypageBtn>
            <s.MypageBtn dashboard>
              <img src={DashboardGreen} alt="대시보드" />
              <div>대시보드</div>
            </s.MypageBtn>
          </s.MypageBtnWrapper>
        </>
      )}
    </s.MyInfoContainer>
  )
}

const TutorDetailItem = styled.div`
  display: flex;
  margin-bottom: 1em;
  align-items: ${(props) =>
    props.type === '경력' || props.type === '튜터 소개'
      ? 'flex-start'
      : 'center'};

  div:first-child {
    width: 5em !important;
    font-weight: bold;
  }

  div:last-child {
    flex: 1;
    font-size: ${(props) => (props.type === '가능 언어' ? '1.8em' : '1em')};
    color: ${(props) => (props.type === '경력' ? '#5E84B5' : '#525252')};
    font-weight: ${(props) => (props.type === '경력' ? 'bold' : 'normal')};
  }
`

const TutorDetailInfoContainer = styled.div`
  background-color: #fff;
  flex: 1;
  margin-top: 1.2em;
  border-radius: 2em;
  padding: 1.5em 1.2em;
  overflow-y: auto;
`

const TutorProfileWrapper = styled.div`
  text-align: center;
  align-content: center;
  height: 11em;
  margin-top: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 10em;
    height: 10em;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    transform: translate(-50%, -50%);
  }
`

const tutorDetailInfo = [
  {
    title: '튜터 평점',
    content: 5,
  },
  {
    title: '가능 언어',
    content: '🇰🇷 🇯🇵 🇺🇸 🇩🇪',
  },
  {
    title: '경력',
    content: [
      '인하대학교 국어교육과 학사',
      '인하대학교 다문화교육 석사',
      '인하대학교 국어교육과 교수',
    ],
  },
  {
    title: '튜터 소개',
    content:
      '안녕하세요!\n전세계를 돌아다니며 음식과 함께 언어를 배운 백종원입니다.\n\n어느 나라에 가서든지 음식 주문하는 데 문제 없게끔 만들어드리겠습니다',
  },
]

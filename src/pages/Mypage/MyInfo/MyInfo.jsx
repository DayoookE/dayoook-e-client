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

const ProgressProvider = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = useState(valueStart)
  useEffect(() => {
    setValue(valueEnd)
  }, [valueEnd])

  return children(value)
}

export default function MyInfo() {
  return (
    <s.MyInfoContainer>
      {/* 유저 정보 상단바 */}
      <s.MyInfoTitleWrapper>
        <s.Title>나의 정보</s.Title>
        <img src={SetInfoIcon} alt="설정" />
      </s.MyInfoTitleWrapper>

      {/* 유저 프로필 */}
      <s.ProfileWrapper>
        <img src={MyImgIcon} alt="프로필" />
        <ProgressProvider valueStart={0} valueEnd={70}>
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

      {/* 유저 이름 */}
      <s.MyInfoNameWrapper>
        <img src={SproutIcon} alt="새싹" />
        <div>
          <s.MyName>다유기</s.MyName>
          <div>새싹 학생</div>
        </div>
      </s.MyInfoNameWrapper>

      {/* 유저 상세 정보 */}
      <s.DetailInfoWrapper>
        <s.DetailInfoContainer>
          <img src={GradeInfo} alt="학년" />
          <div>초등학교 2학년</div>
        </s.DetailInfoContainer>
        <s.DetailInfoContainer tutor>
          <img src={TutorIcon} alt="튜터" />
          <div>여경래 튜터의 튜티</div>
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
    </s.MyInfoContainer>
  )
}

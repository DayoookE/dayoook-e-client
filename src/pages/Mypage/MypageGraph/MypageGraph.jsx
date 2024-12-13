import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import Statistics from '../Statistics/Statistics'
import 'react-circular-progressbar/dist/styles.css'
import * as s from './MypageGraph.style'
import TuteeApplication from '../TutorMypage/TuteeApplication/TuteeApplication'

const ProgressProvider = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = useState(valueStart)
  useEffect(() => {
    setValue(valueEnd)
  }, [valueEnd])

  return children(value)
}

export default function MypageGraph({ isTutor, userInfo, userId }) {
  const graphContent = getGraphContent(userInfo) // 동적으로 그래프 내용 설정

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <s.GraphWrapper>
        {/* 그래프 */}
        {(isTutor ? tutorGraphContent : graphContent).map((content, index) => (
          <s.GraphContainer key={index}>
            {/* 원형 그래프 */}
            <ProgressProvider valueStart={0} valueEnd={content.percent}>
              {(value) => (
                <CircularProgressbar
                  value={value}
                  strokeWidth={30}
                  styles={buildStyles({
                    pathColor: content.pathColor,
                    trailColor: content.trailColor,
                    strokeLinecap: 'butt',
                  })}
                />
              )}
            </ProgressProvider>
            {/* 그래프 텍스트 */}
            <s.GraphTextWrapper>
              <div>{content.percent}%</div>
              <div>{content.title}</div>
            </s.GraphTextWrapper>
          </s.GraphContainer>
        ))}
      </s.GraphWrapper>
      {/* 학습 분석 */}
      {isTutor ? (
        <TuteeApplication userId={userId} />
      ) : (
        <s.StatisticsContainer>
          <Statistics />
        </s.StatisticsContainer>
      )}
    </div>
  )
}

// 그래프 내용을 동적으로 반환하는 함수
const getGraphContent = (userInfo) => [
  {
    title: '복습률',
    percent: 63, // 예시 데이터
    pathColor: '#89CE88',
    trailColor: '#CAEFC9',
  },
  {
    title: '출석률',
    percent: userInfo?.attendanceRate || 0, // userInfo에서 출석률 가져옴
    pathColor: '#FF8484',
    trailColor: '#FFDBDB',
  },
]

const tutorGraphContent = [
  {
    title: '튜티 만족도',
    percent: 99,
    pathColor: '#FFD400',
    trailColor: '#FFF2B2',
  },
  {
    title: '튜티 성취도',
    percent: 70,
    pathColor: '#FF8484',
    trailColor: '#FFDBDB',
  },
]

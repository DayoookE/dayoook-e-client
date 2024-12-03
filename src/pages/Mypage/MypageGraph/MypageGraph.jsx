import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import Statistics from '../Statistics/Statistics'
import 'react-circular-progressbar/dist/styles.css'
import * as s from './MypageGraph.style'

const ProgressProvider = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = useState(valueStart)
  useEffect(() => {
    setValue(valueEnd)
  }, [valueEnd])

  return children(value)
}

export default function MypageGraph() {
  return (
    <div>
      <s.GraphWrapper>
        {/* 그래프 */}
        {graphContent.map((content, index) => (
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
      <s.StatisticsContainer>
        <Statistics />
      </s.StatisticsContainer>
    </div>
  )
}

const graphContent = [
  {
    title: '복습률',
    percent: 63,
    pathColor: '#89CE88',
    trailColor: '#CAEFC9',
  },
  {
    title: '출석률',
    percent: 90,
    pathColor: '#FF8484',
    trailColor: '#FFDBDB',
  },
]

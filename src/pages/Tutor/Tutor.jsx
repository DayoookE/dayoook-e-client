import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import {TutorSummary, TutorList, TutorMenu} from '.'
import {NavBar} from '../../components'
import * as ms from '../Main/Main.style'
import * as s from './Tutor.style'

export default function Tutor({ setIsLogin }) {
  const location = useLocation()
  const [isRecommend, setIsRecommend] = useState(location.state?.isRecommend || false)
  const [recommendTutors, setRecommendTutors] = useState(location.state?.recommendTutors ?? [])
  const [selectedTutor, setSelectedTutor] = useState(null)  // 추가

  return (
      <ms.MainContainer>
        <NavBar setIsLogin={setIsLogin} />
        <ms.Content style={{ maxWidth: 'calc(100vw - 11.2em)' }}>
          <TutorMenu setIsRecommend={setIsRecommend} />
          <s.TutorListContainer>
            <ms.Title>튜터 목록</ms.Title>
            <s.TutorListContent>
              <TutorList
                  setIsLogin={setIsLogin}
                  isRecommend={isRecommend}
                  setIsRecommend={setIsRecommend}
                  recommendTutors={recommendTutors}
                  onSelectTutor={setSelectedTutor}  // 추가
              />
              <TutorSummary selectedTutor={selectedTutor} />  {/* 추가 */}
            </s.TutorListContent>
          </s.TutorListContainer>
        </ms.Content>
      </ms.MainContainer>
  )
}

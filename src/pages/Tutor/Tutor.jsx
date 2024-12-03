import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { TutorSummary, TutorList, TutorMenu } from '.'
import { NavBar } from '../../components'
import * as ms from '../Main/Main.style'
import * as s from './Tutor.style'

export default function Tutor({ setIsLogin }) {
  const location = useLocation()
  const [isRecommend, setIsRecommend] = useState(location.state?.isRecommend)

  return (
    <ms.MainContainer>
      <NavBar setIsLogin={setIsLogin} />
      <ms.Content style={{ maxWidth: 'calc(100vw - 11.2em)' }}>
        {/* 튜터 목록 페이지 메뉴 */}
        <TutorMenu setIsRecommend={setIsRecommend} />
        {/* 튜터 목록 */}
        <s.TutorListContainer>
          <ms.Title>튜터 목록</ms.Title>
          <s.TutorListContent>
            <TutorList
              setIsLogin={setIsLogin}
              isRecommend={isRecommend}
              setIsRecommend={setIsRecommend}
            />
            <TutorSummary />
          </s.TutorListContent>
        </s.TutorListContainer>
      </ms.Content>
    </ms.MainContainer>
  )
}

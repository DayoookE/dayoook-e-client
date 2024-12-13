import { MenuBar, NavBar } from '../../../components'
import { MyCourse, MyInfo, MypageGraph, Schedule } from '../'
import * as s from './TutorMypage.style'
import TuteeList from './TuteeList/TuteeList'

export default function TutorMypage({ setIsLogin }) {
  return (
    <s.MypageWrapper>
      <s.MainContainer>
        {/* 마이 페이지 네비바 */}
        <NavBar setIsLogin={setIsLogin} isTutor={true} />

        <s.Content>
          {/* 마이 페이지 메뉴바 */}
          <s.MainMenuContainer>
            <s.Title>✨&nbsp;&nbsp;마이페이지</s.Title>
          </s.MainMenuContainer>

          {/* 마이 페이지 컨텐츠 */}
          <s.ContentContainer>
            <s.TopContainer isTutor>
              {/* 통계 그래프 */}
              <MypageGraph isTutor />

              {/* 튜티 리스트 */}
              <TuteeList />
            </s.TopContainer>
          </s.ContentContainer>
        </s.Content>
      </s.MainContainer>

      {/* 유저 정보 */}
      <MyInfo isTutor />
    </s.MypageWrapper>
  )
}

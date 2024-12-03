import { MenuBar, NavBar } from '../../components'
import { MyCourse, MyInfo, MypageGraph, Schedule } from '.'
import * as s from './Mypage.style'

export default function Mypage({ setIsLogin }) {
  return (
    <s.MypageWrapper>
      <s.MainContainer>
        {/* 마이 페이지 네비바 */}
        <NavBar setIsLogin={setIsLogin} />

        <s.Content>
          {/* 마이 페이지 메뉴바 */}
          <s.MainMenuContainer>
            <s.Title>✨&nbsp;&nbsp;마이페이지</s.Title>
            <MenuBar />
          </s.MainMenuContainer>
          {/* 마이 페이지 컨텐츠 */}
          <s.ContentContainer>
            <s.TopContainer>
              {/* 통계 그래프 */}
              <MypageGraph />
              {/* 멘토링 일정 */}
              <Schedule />
            </s.TopContainer>

            <s.BottomContainer>
              {/* 수업 리스트 */}
              <MyCourse />
            </s.BottomContainer>
          </s.ContentContainer>
        </s.Content>
      </s.MainContainer>
      {/* 유저 정보 */}
      <MyInfo />
    </s.MypageWrapper>
  )
}

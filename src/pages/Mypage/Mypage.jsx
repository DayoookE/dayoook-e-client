import { MenuBar, NavBar } from '../../components';
import { MyCourse, MyInfo, MypageGraph, Schedule } from '.';
import * as s from './Mypage.style';
import { useUser } from '../../components/common/UserContext';

export default function Mypage({ setIsLogin }) {
  const { userInfo } = useUser(); // 유저 정보 가져오기

  return (
      <s.MypageWrapper>
        <s.MainContainer>
          {/* 마이 페이지 네비바 */}
          <NavBar setIsLogin={setIsLogin} userInfo={userInfo} />

          <s.Content>
            {/* 마이 페이지 메뉴바 */}
            <s.MainMenuContainer>
              <s.Title>✨&nbsp;&nbsp;마이페이지</s.Title>
              <MenuBar userInfo={userInfo} />
            </s.MainMenuContainer>
            {/* 마이 페이지 컨텐츠 */}
            <s.ContentContainer>
              <s.TopContainer>
                {/* 통계 그래프 */}
                <MypageGraph userInfo={userInfo}/>
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
        <MyInfo userInfo={userInfo} />
      </s.MypageWrapper>
  );
}

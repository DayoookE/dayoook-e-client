import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Home, Assistant, Info } from '.'
import { MenuBar, NavBar } from '../../components'
import ModalComponent from '../../components/ModalComponent/ModalComponent'
import * as s from './Main.style'
import { useUser } from '../../components/common/UserContext';

export default function Main({ setIsLogin }) {
  const navigate = useNavigate()
  const [modalIsOpen, setIsOpen] = useState(false)
  const { userInfo, loading, fetchUserInfo } = useUser(); // fetchUserInfo 가져오기


  const handleSubmit = () => {
    setIsOpen(false)
    navigate('/tutorlist', {
      state: {
        isRecommend: true,
      },
    })
  }

  // 유저 정보가 없을 경우 다시 호출
  useEffect(() => {
    if (!userInfo && !loading) {
      fetchUserInfo()
          .then(() => {
            console.log('유저 정보를 성공적으로 다시 불러왔습니다.');
          })
          .catch((error) => {
            console.error('유저 정보 재조회 중 오류 발생:', error);
          });
    }
  }, [userInfo, loading, fetchUserInfo]);

  if (loading) return <div>로딩 중...</div>

  return (
      <s.MainContainer>
        <NavBar setIsLogin={setIsLogin} userInfo={userInfo} />
        <s.Content>
          <s.MainMenuContainer>
            <s.RecommendButton onClick={() => setIsOpen(true)}>
              🌱 다육이에게 튜터 추천받기
            </s.RecommendButton>
            <ModalComponent
                handleSubmit={handleSubmit}
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
            />
            <MenuBar userInfo={userInfo} />
          </s.MainMenuContainer>
          <s.ContentContainer>
            <Home userInfo={userInfo} />
            <Assistant userInfo={userInfo} />
          </s.ContentContainer>
          <Info />
        </s.Content>
      </s.MainContainer>
  )
}
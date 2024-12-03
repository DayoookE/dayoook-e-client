import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Home, Assistant, Info } from '.'
import { MenuBar, NavBar } from '../../components'
import ModalComponent from '../../components/ModalComponent/ModalComponent'
import * as s from './Main.style'

export default function Main({ setIsLogin }) {
  const navigate = useNavigate()
  const [modalIsOpen, setIsOpen] = useState(false)

  const handleSubmit = () => {
    setIsOpen(false)
    navigate('/tutorlist', {
      state: {
        isRecommend: true,
      },
    })
  }

  return (
    <s.MainContainer>
      <NavBar setIsLogin={setIsLogin} />
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

          <MenuBar />
        </s.MainMenuContainer>
        <s.ContentContainer>
          <Home />
          <Assistant />
        </s.ContentContainer>
        <Info />
      </s.Content>
    </s.MainContainer>
  )
}

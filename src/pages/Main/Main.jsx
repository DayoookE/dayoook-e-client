import { Home, Assistant, Info } from '.'
import { MenuBar, NavBar } from '../../components'
import * as s from './Main.style'

export default function Main({ setIsLogin }) {
  return (
    <s.MainContainer>
      <NavBar setIsLogin={setIsLogin} />
      <s.Content>
        <s.MainMenuContainer>
          <s.RecommendButton>🌱 다육이에게 튜터 추천받기</s.RecommendButton>
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

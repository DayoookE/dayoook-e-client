import { Link } from 'react-router-dom'
import { MenuBar } from '../../../components'
import { PrevPageIcon } from '../../../assets/Mypage/Review'
import * as s from './ReviewMenu.style'

export default function ReviewMenu() {
  return (
    <s.MainMenuContainer>
      <s.ReviewMenuContainer>
        <Link to="/mypage">
          <img src={PrevPageIcon} alt="prev" />
        </Link>
        <s.Title>여경래 튜터의 수업</s.Title>
      </s.ReviewMenuContainer>
      <MenuBar />
    </s.MainMenuContainer>
  )
}

import { useState } from 'react'
import { useNavigate } from 'react-router'
import { MenuBar, NavBar } from '../../../components'
import StudyBottom from '../StudyBottom/StudyBottom'
import FairyReadContent from './FairyReadContent/FairyReadContent'
import { TitleIcon, PrevIcon } from '../../../assets/Study'
import * as s from './FairyRead.style'

export default function FairyRead({ setIsLogin }) {
  const navigate = useNavigate()
  const [fontSize, setFontSize] = useState(2)

  return (
    <s.StudyContainer>
      <NavBar setIsLogin={setIsLogin} />
      <s.StudyContent>
        {/* 동화 페이지 메뉴바 */}
        <s.MainMenuContainer>
          <s.StudyTitle>
            <img src={PrevIcon} alt="prev" onClick={() => navigate('/study')} />
            <img src={TitleIcon} alt="title" />
            <div>견우와 직녀</div>
          </s.StudyTitle>
          <MenuBar />
        </s.MainMenuContainer>

        {/* 동화 콘텐츠 */}
        <FairyReadContent fontSize={fontSize} />

        {/* 동화 페이지 아래 부분 */}
        <StudyBottom
          type="read"
          fontSize={fontSize}
          setFontSize={setFontSize}
        />
      </s.StudyContent>
    </s.StudyContainer>
  )
}

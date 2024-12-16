import { useNavigate } from 'react-router-dom'
import * as s from './MenuBar.style'
import { Alarm, Lang, Profile } from '.'

export default function MenuBar({ userInfo }) {
  const isStudy = window.location.href.includes('/study')
  const navigate = useNavigate()

  return (
    <s.MenuBarContainer>
      <Lang isStudy={isStudy} />
      <Alarm isStudy={isStudy} navigate={navigate} />
      <Profile isStudy={isStudy} userInfo={userInfo} navigate={navigate} />
    </s.MenuBarContainer>
  )
}

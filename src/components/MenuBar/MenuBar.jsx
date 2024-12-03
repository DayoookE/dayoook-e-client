import * as s from './MenuBar.style'
import { Alarm, Lang, Profile } from '.'

export default function MenuBar() {
  const isStudy = window.location.href.includes('/study')

  return (
    <s.MenuBarContainer>
      <Lang isStudy={isStudy} />
      <Alarm isStudy={isStudy} />
      <Profile isStudy={isStudy} />
    </s.MenuBarContainer>
  )
}

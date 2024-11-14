import * as s from './MenuBar.style'
import { Alarm, Lang, Profile } from '.'

export default function MenuBar() {
  return (
    <s.MenuBarContainer>
      <Lang />
      <Alarm />
      <Profile />
    </s.MenuBarContainer>
  )
}

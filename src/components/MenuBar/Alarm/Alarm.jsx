import { AlarmIcon } from '../../../assets/MenuBar'
import * as s from '../MenuBar.style'
import * as as from './Alarm.style'

export default function Alarm() {
  return (
    <as.AlarmContainer>
      <s.MenuIcon src={AlarmIcon} alt="알람" />
      <as.AlarmCount>3</as.AlarmCount>
    </as.AlarmContainer>
  )
}

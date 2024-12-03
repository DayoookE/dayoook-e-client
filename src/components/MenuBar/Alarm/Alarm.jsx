import { AlarmIcon, AlarmWhiteIcon } from '../../../assets/MenuBar'
import * as s from '../MenuBar.style'
import * as as from './Alarm.style'

export default function Alarm({ isStudy }) {
  return (
    <as.AlarmContainer>
      <s.MenuIcon src={isStudy ? AlarmWhiteIcon : AlarmIcon} alt="알람" />
      <as.AlarmCount isStudy={isStudy}>3</as.AlarmCount>
    </as.AlarmContainer>
  )
}

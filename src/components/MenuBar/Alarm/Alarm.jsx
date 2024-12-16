import { useState } from 'react'
import { AlarmIcon, AlarmWhiteIcon } from '../../../assets/MenuBar'
import * as s from '../MenuBar.style'
import * as as from './Alarm.style'

export default function Alarm({ isStudy, navigate }) {
  const [alarmCount, setAlarmCount] = useState(3)

  return (
    <as.AlarmContainer>
      <s.MenuIcon
        src={isStudy ? AlarmWhiteIcon : AlarmIcon}
        alt="알람"
        onClick={() => (alarmCount ? navigate('/mypage') : null)}
      />
      {alarmCount > 0 && (
        <as.AlarmCount
          isStudy={isStudy}
          onClick={() => (alarmCount ? navigate('/mypage') : null)}
        >
          {alarmCount}
        </as.AlarmCount>
      )}
    </as.AlarmContainer>
  )
}

import { format } from 'date-fns'
import { NextIcon, PrevIcon } from '../../../assets/Mypage'
import 'react-calendar/dist/Calendar.css'
import * as s from './Schedule.style'

export default function Schedule() {
  return (
    <s.ScheduleContainer>
      <s.Title>💡&nbsp;&nbsp;멘토링 일정</s.Title>
      <s.CustomCalendar
        locale="ko"
        calendarType="hebrew"
        formatDay={(locale, date) => format(date, 'd')}
        prev2Label={null}
        next2Label={null}
        prevLabel={<img src={PrevIcon} alt="prev" />}
        nextLabel={<img src={NextIcon} alt="next" />}
        tileClassName={({ date }) =>
          dayList.includes(format(date, 'yyyy-MM-dd')) && 'mentoring'
        }
        onClickDay={() => {}}
        selectRange={false}
      />
    </s.ScheduleContainer>
  )
}

const dayList = [
  '2024-10-15',
  '2024-10-25',
  '2024-10-26',
  '2024-11-05',
  '2024-11-11',
  '2024-11-21',
  '2024-11-28',
  '2024-12-04',
  '2024-12-10',
  '2024-12-19',
  '2024-12-26',
]

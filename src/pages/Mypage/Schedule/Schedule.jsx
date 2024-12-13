import { format } from 'date-fns'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { NextIcon, PrevIcon } from '../../../assets/Mypage'
import 'react-calendar/dist/Calendar.css'
import * as s from './Schedule.style'

export default function Schedule() {
    const [scheduleData, setScheduleData] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_SPRING_API_URL}/tutees/schedule`,
                    {
                        params: {
                            year: currentDate.getFullYear(),
                            month: currentDate.getMonth() + 1
                        },
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('dayookeAccessToken')}`
                        }
                    }
                );
                setScheduleData(response.data.result);
            } catch (error) {
                console.error('Error fetching schedule:', error);
            }
        };

        fetchSchedule();
    }, [currentDate]);

    const mentoringDays = scheduleData?.schedules.map(schedule =>
        format(new Date(scheduleData.year, scheduleData.month - 1, schedule.day), 'yyyy-MM-dd')
    ) || [];

    const getLessonsForDate = (date) => {
        const day = parseInt(format(date, 'd'));
        const schedule = scheduleData?.schedules.find(s => s.day === day);
        return schedule?.lessons || [];
    };

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
                    mentoringDays.includes(format(date, 'yyyy-MM-dd')) && 'mentoring'
                }
                tileContent={({ date }) => {
                    const lessons = getLessonsForDate(date);
                    if (lessons.length === 0) return null;

                    const title = lessons.map(lesson =>
                        `${lesson.tutorName} 튜터님 (${lesson.startTime})`
                    ).join('\n');

                    return (
                        <div
                            title={title}
                            style={{ width: '100%', height: '100%' }}
                        />
                    );
                }}
                onClickDay={(value) => {
                    const lessons = getLessonsForDate(value);
                    if (lessons.length > 0) {
                        alert(lessons.map(lesson =>
                            `${lesson.tutorName} 튜터링 수업 (${lesson.startTime})`
                        ).join('\n'));
                    }
                }}
                selectRange={false}
                onActiveStartDateChange={({ activeStartDate }) => {
                    setCurrentDate(activeStartDate);
                }}
            />
        </s.ScheduleContainer>
    )
}
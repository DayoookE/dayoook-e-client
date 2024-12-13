import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { Face1, Face2, Face3, Face4 } from '../../../assets/face'
import { EnterIcon } from '../../../assets/Mypage'
import * as s from './MyCourse.style'
import { useMapping } from '../../../components/common/MappingContext'

export default function MyCourse() {
    const { timeSlots, days } = useMapping();
    const [approvedApplications, setApprovedApplications] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApprovedApplications = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_SPRING_API_URL}/tutees/applications`,
                    {
                        params: {
                            page: 1,
                            status: 'APPROVED'
                        },
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('dayookeAccessToken')}`
                        }
                    }
                );
                setApprovedApplications(response.data.result.content);
            } catch (err) {
                console.error('Error fetching approved applications:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchApprovedApplications();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading courses</div>;

    const courseList = approvedApplications.map((app, index) => {
        // 다음 수업 시간 계산
        const nextSchedule = app.scheduleTimeSlots[0];
        const dayName = days.find(d => d.id === nextSchedule.dayId)?.name || '';
        const timeSlot = timeSlots.find(t => t.id === nextSchedule.timeSlotId)?.time || '';

        return {
            id: app.id,
            profile: app.tutorInfo.profileUrl
                ? `${process.env.REACT_APP_S3_BUCKET}${app.tutorInfo.profileUrl}`
                : [Face1, Face2, Face3, Face4][index % 4],
            name: app.tutorInfo.name,
            title: app.message,
            review: false,
            nextClass: {
                day: dayName,
                time: timeSlot
            }
        };
    });

    return (
        <s.MyCourseWrapper>
            <s.Title>✏️&nbsp;&nbsp;나의 수업</s.Title>
            <s.ListWrapper>
                {courseList.map((course) => (
                    <CourseItem
                        key={course.id}
                        id={course.id}
                        profile={course.profile}
                        name={course.name}
                        title={course.title}
                        review={course.review}
                        nextClass={course.nextClass}
                    />
                ))}
            </s.ListWrapper>
        </s.MyCourseWrapper>
    )
}

const CourseItem = ({ id, profile, name, title, review, nextClass }) => {
    const navigate = useNavigate();

    // nextClass 포맷팅 변경
    const nextClassString = `${nextClass.day} ${nextClass.time}`;

    return (
        <s.CourseItemWrapper>
            <img src={profile} />
            <s.InfoWrapper>
                <div>{title}</div>
                <div>{name} 튜터</div>
            </s.InfoWrapper>
            <s.DetailWrapper>
                <s.ReviewDiv review={review}>
                    {review ? '복습 완료' : '복습하기'}
                </s.ReviewDiv>
                <div>다음 수업: {nextClassString}</div>
            </s.DetailWrapper>
            <s.EnterImg
                onClick={() => navigate(`/mypage/review/${id}`)}
                src={EnterIcon}
                alt="수업가기"
            />
        </s.CourseItemWrapper>
    );
};
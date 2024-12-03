import { useNavigate } from 'react-router'
import { Face1, Face2, Face3, Face4 } from '../../../assets/face'
import { EnterIcon } from '../../../assets/Mypage'
import * as s from './MyCourse.style'

export default function MyCourse() {
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
  const navigate = useNavigate()
  const nextClassDate = new Date(nextClass)
  const nextClassString = `${
    nextClassDate.getMonth() + 1
  }월 ${nextClassDate.getDate()}일 ${
    nextClassDate.getHours() > 12 ? '오후' : '오전'
  } ${nextClassDate.getHours() % 12}시`

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
  )
}

const courseList = [
  {
    id: 1,
    profile: Face3,
    name: '여경래',
    title: '초등학생을 위한 의사소통',
    review: true,
    nextClass: '2021-12-12T15:00:00',
  },
  {
    id: 2,
    profile: Face2,
    name: '백종원',
    title: '한국어 문법 기초 수업',
    review: false,
    nextClass: '2021-12-18T19:00:00',
  },
  {
    id: 3,
    profile: Face1,
    name: '이은지',
    title: '한국어 독해 첫걸음',
    review: false,
    nextClass: '2021-12-20T09:00:00',
  },
  {
    id: 4,
    profile: Face4,
    name: '신짱구',
    title: '짱구는 못말려',
    review: true,
    nextClass: '2021-12-25T15:00:00',
  },
]

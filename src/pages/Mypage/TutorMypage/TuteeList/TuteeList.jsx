import { FlowerIcon, LeafIcon, FruitIcon } from '../../../../assets/level'
import { EnterClassIcon, ExitClassIcon } from '../../../../assets/Mypage/Tutor'
import axios from 'axios'
import { useState, useEffect } from 'react'
import * as s from './TuteeList.style'
import LessonModal from '../LessonModal/LessonModal'

export default function TuteeList() {
  const [userInfo, setUserInfo] = useState(null)
  const [tuteeList, setTuteeList] = useState([])
  const [lessonId, setLessonId] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('dayookeAccessToken')
        if (!token) {
          setUserInfo(null)
          return
        }
        const response = await axios.get(
          `${process.env.REACT_APP_SPRING_API_URL}/users/info`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        setUserInfo(response.data.result)
      } catch (error) {
        console.error('유저 정보 조회 실패:', error)
        setUserInfo(null)
      } finally {
        setLoading(false)
      }
    }
    fetchUserInfo()
  }, [])

  // 신청 튜티 목록
  useEffect(() => {
    const token = localStorage.getItem('dayookeAccessToken')
    const fetchTuteeList = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SPRING_API_URL}/tutors/application/${userInfo.id}?page=1`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        console.log('response:', response)
        setTuteeList(response?.data?.result.content || [])
      } catch (error) {
        console.error('Error fetching tutee list:', error)
      }
    }
    fetchTuteeList()
  }, [userInfo])

  return (
    <s.MyTuteeWrapper>
      <s.Title>✏️&nbsp;&nbsp;나의 튜티</s.Title>
      <s.ListWrapper>
        {tuteeList.map((tutee) => (
          <TuteeItem tutee={tutee} />
        ))}
      </s.ListWrapper>
    </s.MyTuteeWrapper>
  )
}

const TuteeItem = ({ tutee }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalIsOpen, setIsOpenModal] = useState(false)
  const [sdlessonId, setSdLessonId] = useState(null)

  console.log('tutee:', tutee)
  console.log('lessonId:', tutee.lessonId)

  const enterClassHandler = async (tuteeId) => {
    console.log('enter class:', tuteeId)
    // lessons/schedules 호출

    const token = localStorage.getItem('dayookeAccessToken')
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SPRING_API_URL}/lessons/schedules`,
        {
          lessonId: tutee.lessonId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      console.log('response:', response)
      setSdLessonId(response.data.result.id)
      setIsOpen(true)
    } catch (error) {
      console.error('Error fetching lesson id:', error)
    }
  }

  const exitClassHandler = (tuteeId) => {
    console.log('exit class:', tuteeId)
    // lessons/schedules/{scheduleId}/complete patch 호출
    const token = localStorage.getItem('dayookeAccessToken')
    axios
      .patch(
        `${process.env.REACT_APP_SPRING_API_URL}/lessons/schedules/${sdlessonId}/complete`,
        {
          id: sdlessonId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log('response:', response)
      })
      .catch((error) => {
        console.error('Error exiting class:', error)
      })

    setIsOpen(false)
  }

  return (
    <s.TuteeItemWrapper>
      <img
        src={`${process.env.REACT_APP_S3_BUCKET}${tutee.tuteeInfo.profileUrl}`}
      />
      <s.InfoWrapper>
        <div>{tutee.tuteeInfo.name}</div>
        <div>{tutee.message}</div>
      </s.InfoWrapper>
      <s.DetailWrapper>
        <s.ReviewDiv review={tutee.review}>
          {tutee.review ? '복습 완료' : '복습하기'}
        </s.ReviewDiv>
        <div>다음 수업: {tutee.nextClass}</div>
      </s.DetailWrapper>
      <s.EnterImg
        src={isOpen ? ExitClassIcon : EnterClassIcon}
        onClick={() =>
          isOpen ? exitClassHandler(tutee.id) : enterClassHandler(tutee.id)
        }
        alt="수업가기"
      />

      <LessonModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpenModal}
        handleSubmit={() => {
          isOpen ? exitClassHandler(tutee.id) : enterClassHandler(tutee.id)
        }}
      />
    </s.TuteeItemWrapper>
  )
}

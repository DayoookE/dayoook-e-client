import { useState, useEffect } from 'react'
import { CheckIcon } from '../../../../assets/TutorPage'
import * as s from './TuteeApplication.style'
import axios from 'axios'

export default function TuteeApplication() {
  const [userInfo, setUserInfo] = useState(null)
  const [tuteeList, setTuteeList] = useState([])
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
      <s.Title>🙌&nbsp;&nbsp;신청 튜티 목록</s.Title>
      <s.ListWrapper>
        {tuteeList &&
          tuteeList.map((tutee) =>
            tutee.status === 'APPLYING' ? <TuteeItem tutee={tutee} /> : null
          )}
      </s.ListWrapper>
    </s.MyTuteeWrapper>
  )
}

const TuteeItem = ({ tutee }) => {
  // 신청 승인
  const handleAccept = async () => {
    const token = localStorage.getItem('dayookeAccessToken')
    console.log('token:', token)
    try {
      await axios.post(
        `${process.env.REACT_APP_SPRING_API_URL}/applications/${tutee.id}/approve`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      alert('승인되었습니다 🎉')
    } catch (error) {
      console.error('Error accepting tutee:', error)
      alert('승인에 실패했습니다 😢')
    }
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

      <s.EnterImg src={CheckIcon} alt="승인" onClick={handleAccept} />
    </s.TuteeItemWrapper>
  )
}

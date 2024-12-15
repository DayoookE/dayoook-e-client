import { StarIcon } from '../../../assets/icon'
import * as s from './TutorSummary.style'
import TutorApplyModal from '../TutorApplyModal/TutorApplyModal'
import { useEffect, useState } from 'react'
import axios from 'axios'

const getLanguage = (language) => {
  const languageMapping = {
    대한민국: '🇰🇷',
    중국: '🇨🇳',
    베트남: '🇻🇳',
    영어: '🇺🇸',
    러시아: '🇷🇺',
    필리핀: '🇵🇭',
  }
  return languageMapping[language] || '🇰🇷'
}

export default function TutorSummary({ selectedTutor }) {
  const [tutorDetail, setTutorDetail] = useState(null)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchTutorDetail = async () => {
      if (!selectedTutor) return

      try {
        setLoading(true)
        const response = await axios.get(
          `${process.env.REACT_APP_SPRING_API_URL}/tutors/${selectedTutor.id}`
        )
        setTutorDetail(response.data.result)
      } catch (error) {
        console.error('Error fetching tutor details:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTutorDetail()
  }, [selectedTutor])

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('dayookeAccessToken')
      if (!token) {
        alert('로그인이 필요한 서비스입니다.')
        return
      }

      await axios.post(
        `${process.env.REACT_APP_SPRING_API_URL}/applications`,
        {
          tutorId: selectedTutor.id,
          timeSlots: [
            {
              dayId: 4,
              timeSlotId: 9,
            },
          ],
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      alert('🙌 튜티 신청이 완료되었습니다! 🙌')
    } catch (error) {
      console.error('Error applying tutor:', error)
      alert(
        '😢 튜티 신청에 실패했습니다.\n가능한 시간을 확인하여 다시 시도해주세요. 😢'
      )
    } finally {
      setIsOpen(false)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!selectedTutor || !tutorDetail) {
    return <div>튜터를 선택해주세요</div>
  }

  return (
    <s.TutorSummaryContainer>
      <s.Title>튜터 소개 요약</s.Title>
      <s.TutorSummaryCard>
        <s.SummaryProfile>
          <s.SummaryImg
            src={`${process.env.REACT_APP_S3_BUCKET}${tutorDetail.profileUrl}`}
            alt="tutor"
          />
          <s.SummaryTitle>
            <div>{tutorDetail.name}</div>
            <div>
              {Array.from({ length: tutorDetail.rating || 0 }, (_, idx) => (
                <img key={idx} src={StarIcon} alt="star" />
              ))}
            </div>
          </s.SummaryTitle>
        </s.SummaryProfile>

        <s.SummaryContent>
          <s.SummaryDetail>
            <div>튜티 주 연령</div>
            <div>{tutorDetail.ageGroups.map((age) => age.name).join(', ')}</div>
          </s.SummaryDetail>
          <s.SummaryDetail lang>
            <div>가능 언어</div>
            <div>
              {tutorDetail.languages
                .map((lang) => getLanguage(lang.name))
                .join(' ')}
            </div>
          </s.SummaryDetail>
          <s.SummaryDetail>
            <div>튜티 소개</div>
            <div>{tutorDetail.introduction}</div>
          </s.SummaryDetail>
          <s.SummaryDetail career>
            <div>경력</div>
            <div>
              {tutorDetail.experiences.map((exp) => (
                <s.CareerWrapper key={exp.id}>
                  {exp.description}
                  <br />
                </s.CareerWrapper>
              ))}
            </div>
          </s.SummaryDetail>
        </s.SummaryContent>

        <s.SummaryApplyButton onClick={() => setIsOpen(true)}>
          튜티 신청하기
        </s.SummaryApplyButton>
        <TutorApplyModal
          setIsOpen={setIsOpen}
          modalIsOpen={modalIsOpen}
          card={tutorDetail}
          setMessage={setMessage}
          handleSubmit={handleSubmit}
        />
      </s.TutorSummaryCard>
    </s.TutorSummaryContainer>
  )
}

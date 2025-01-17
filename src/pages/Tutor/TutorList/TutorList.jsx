import TutorSelect from '../TutorSelect/TutorSelect'
import { DotIcon, StarIcon } from '../../../assets/icon'
import * as s from './TutorList.style'
import { forwardRef, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import TutorApplyModal from '../TutorApplyModal/TutorApplyModal'

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

const getLevel = (level) => {
  const levelMapping = {
    BEGINNER: '초급',
    INTERMEDIATE: '중급',
    ADVANCED: '고급',
  }
  return levelMapping[level] || '초급'
}

export default function TutorList({
  isRecommend,
  setIsRecommend,
  recommendTutors,
  onSelectTutor,
  selectedTutor,
}) {
  const [tutors, setTutors] = useState([])
  const [page, setPage] = useState(1)
  const [ageOptions, setAgeOptions] = useState([])
  const [languageOptions, setLanguageOptions] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const observerTarget = useRef(null)

  const fetchTutors = async (searchKeyword) => {
    try {
      setLoading(true)
      if (isRecommend) {
        setTutors(recommendTutors)
        setHasMore(false)
      } else {
        const tutorName = searchKeyword || ''
        const params = new URLSearchParams([
          ...(ageOptions.length > 0
            ? ageOptions.map((id) => ['ageGroupId', id.toString()])
            : []),
          ...(languageOptions.length > 0
            ? languageOptions.map((id) => ['languageId', id.toString()])
            : []),
          ...(tutorName ? [['name', tutorName]] : []),
          ['page', page !== 0 ? page : 1],
        ])
        console.log(`Parameters: ${params}`)
        const response = await axios.get(
          `${process.env.REACT_APP_SPRING_API_URL}/tutors`,
          {
            params: params,
          }
        )
        const newTutors = response?.data?.result?.content || []
        setTutors((prev) =>
          page === 1 || page === 0 ? newTutors : [...prev, ...newTutors]
        )
        setHasMore(!response?.data?.result?.last)
      }
    } catch (error) {
      console.error('Error fetching tutors:', error)
    } finally {
      setLoading(false)
    }
  }

  const handlerSearch = () => {}

  const handleIntersection = (entries) => {
    const [entry] = entries
    if (entry.isIntersecting && hasMore && !loading) {
      setPage((prev) => prev + 1)
    }
  }

  useEffect(() => {
    setTutors([])
    setPage(1)
    setHasMore(!isRecommend)
    fetchTutors()
  }, [isRecommend])

  useEffect(() => {
    setTutors([])
    console.log(
      `Age options: ${ageOptions}, language options: ${languageOptions}`
    )
    if (page === 0) {
      setPage(1)
    } else {
      setPage(0)
    }
  }, [ageOptions, languageOptions])

  useEffect(() => {
    console.log(`Page: ${page}`)
    fetchTutors()
  }, [page])

  useEffect(() => {
    if (isRecommend) {
      return
    }
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '20px',
      threshold: 0.1,
    })

    const currentTarget = observerTarget.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.disconnect()
      }
    }
  }, [hasMore, loading, isRecommend])

  return (
    <s.TutorListContentContainer>
      <TutorSelect
        isRecommend={isRecommend}
        setIsRecommend={setIsRecommend}
        setLanguageOptions={setLanguageOptions}
        setAgeOptions={setAgeOptions}
      />
      <s.Cards>
        {tutors.map((tutor, idx) => {
          const isLastElement = idx === tutors.length - 1
          return (
            <Card
              idx={idx} // 추가
              key={tutor.id || idx}
              card={tutor}
              ref={isLastElement ? observerTarget : null}
              onSelect={onSelectTutor}
              selectedTutor={selectedTutor} // 추가
            />
          )
        })}
      </s.Cards>
      {loading && <div>Loading...</div>}
    </s.TutorListContentContainer>
  )
}

const Card = forwardRef(({ card, onSelect, idx, selectedTutor }, ref) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    // 선택된 튜터가 없을 때, 첫 번째 튜터를 선택
    if (idx === 0) {
      onSelect(card)
    }
  }, [])

  const handleClick = () => {
    if (onSelect) {
      onSelect(card)
    }
  }

  const handleSubmit = async (dayId, timeSlotId) => {
    try {
      const token = localStorage.getItem('dayookeAccessToken')
      if (!token) {
        return
      }

      await axios.post(
        `${process.env.REACT_APP_SPRING_API_URL}/applications`,
        {
          tutorId: card.id,
          timeSlots: [
            {
              dayId: dayId,
              timeSlotId: timeSlotId,
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
        '😢 튜티 신청에 실패했습니다.\n가능한 시간을 확인하여 다시 시도해주세요. 😢\n\n세부 오류 내용 : ' +
          (error.response?.data?.message || '가능한 시간대를 확인해주세요.')
      )
    } finally {
      setIsOpen(false)
    }
  }

  return (
    <s.CardContainer
      ref={ref}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
      isSelected={selectedTutor?.id === card.id}
    >
      <s.CardTop>
        <div>
          {Array.from({ length: card.rating }, (_, idx) => (
            <img key={idx} src={StarIcon} alt="star" />
          ))}
        </div>
        <img src={DotIcon} alt="dot" />
      </s.CardTop>
      <s.TutorImg
        src={`${process.env.REACT_APP_S3_BUCKET}${card.profileUrl}`}
        alt="user"
      />
      <s.TutorName>{card.name}</s.TutorName>

      <s.TutorLevel>
        <div>학습 난이도</div>
        <div>{getLevel(card.koreanLevel)}</div>
      </s.TutorLevel>
      <s.TuteeAge>
        <div>튜티 주 연령</div>
        <div>{card.ageGroups.map((age) => age.name).join(', ')}</div>
      </s.TuteeAge>
      <s.TutorLang>
        {card.languages.map((lang) => getLanguage(lang.name)).join('  ')}
      </s.TutorLang>
      <s.ApplyButton
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(true)
        }}
      >
        튜티 신청하기
      </s.ApplyButton>
      <TutorApplyModal
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        card={card}
        setMessage={setMessage}
        handleSubmit={handleSubmit}
      />
    </s.CardContainer>
  )
})

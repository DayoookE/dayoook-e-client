import { useRef, useState } from 'react'
import ModalComponent from '../../../components/ModalComponent/ModalComponent'
import { MenuBar } from '../../../components'
import { SearchIcon } from '../../../assets/TutorPage'
import * as ms from '../../Main/Main.style'
import * as s from './TutorMenu.style'
import axios from 'axios'

export default function TutorMenu({
  setIsRecommend,
  searchKeywordRef,
  handleSearch,
  setRecommendTutors,
}) {
  const [modalIsOpen, setIsOpen] = useState(false)

  const handleSubmit = async (
    languageLevel,
    preferredGender,
    selectedLanguages,
    availableTimes
  ) => {
    try {
      setIsOpen(false)
      const times = ['오전', '오후', '저녁']

      const preferred_days = []
      const preferred_times = []

      availableTimes.forEach((item) => {
        if (times.includes(item)) preferred_times.push(item)
        else if (item === '평일') {
          preferred_days.push('월', '화', '수', '목', '금')
        } else if (item === '주말') {
          preferred_days.push('토', '일')
        }
      })

      const response = await axios.post(
        `${process.env.REACT_APP_FAST_API_URL}/ai/recommend`,
        {
          language: selectedLanguages.map((text) =>
            text.replace(/[^가-힣]/g, '').trim()
          ),
          preferred_time: preferred_times,
          preferred_day: preferred_days,
          level: languageLevel,
          gender: preferredGender === '남자' ? '남성' : '여성',
        }
      )
      const recommends = response?.data?.recommends
      if (recommends) {
        const promises = recommends.map(async (tutor) => {
          const response = await axios.get(
            `${process.env.REACT_APP_SPRING_API_URL}/tutors/${tutor.tutor_id}`,
            {}
          )
          return response.data?.result
        })
        const results = await Promise.all(promises)
        console.log('Results of tutor search: ', results)
        setIsRecommend(true)
        setRecommendTutors(results)
      }
    } catch (err) {
      console.error('API 호출 또는 데이터 처리 중 오류 발생:', err)
    }
  }

  return (
    <ms.MainMenuContainer>
      <s.MenuLeftContainer>
        <s.SearchContainer>
          <s.SearchInput
            placeholder="튜터를 검색해보세요  🙌"
            ref={searchKeywordRef}
          />
          <s.SearchBtn src={SearchIcon} alt="Search" onClick={handleSearch} />
        </s.SearchContainer>
        <ms.RecommendButton onClick={() => setIsOpen(true)}>
          🌱 다육이에게 튜터 추천받기
        </ms.RecommendButton>
        <ModalComponent
          handleSubmit={handleSubmit}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
        />
      </s.MenuLeftContainer>
      <MenuBar />
    </ms.MainMenuContainer>
  )
}

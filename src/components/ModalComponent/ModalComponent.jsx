import { useState } from 'react'
import RecommendModalItem from './RecommendModalItem/RecommendModalItem'
import Modal from 'react-modal'
import {
  DayookIcon,
  NextIcon,
  PrevIcon,
  XIcon,
} from '../../assets/ModalComponent'
import * as s from './ModalComponent.style'

export default function ModalComponent({
  modalIsOpen,
  setIsOpen,
  handleSubmit,
}) {
  const [ageGroup, setAgeGroup] = useState('')
  const [languageLevel, setLanguageLevel] = useState('')
  const [preferredGender, setPreferredGender] = useState('')
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [availableTimes, setAvailableTimes] = useState([])
  const [currentStep, setCurrentStep] = useState(0)

  const handleLanguageSelect = (language) => {
    setSelectedLanguages((prevState) =>
      prevState.includes(language)
        ? prevState.filter((item) => item !== language)
        : [...prevState, language]
    )
  }

  const handleTimeSelect = (time) => {
    setAvailableTimes((prevState) =>
      prevState.includes(time)
        ? prevState.filter((item) => item !== time)
        : [...prevState, time]
    )
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={s.customStyles}
      contentLabel="Modal"
    >
      <s.ModalTitle>
        <div>✨ 원하는 튜터를 만나기 위해 정보를 입력해주세요 ✨</div>
        <img src={XIcon} alt="X" onClick={closeModal} />
      </s.ModalTitle>
      <div>
        {/* 프로그레스 바 */}
        <s.ProgressContainer>
          <s.ProgressBar value={currentStep} max="4" />
          <s.ImageOverlay
            src={DayookIcon}
            alt="Icon"
            style={{ left: `${(currentStep / 4) * 100 + 2}%` }}
          />
        </s.ProgressContainer>

        {/* 모달 아이템 */}
        <RecommendModalItem
          currentStep={currentStep}
          checkedItem={
            currentStep === 0
              ? ageGroup
              : currentStep === 1
              ? languageLevel
              : currentStep === 2
              ? preferredGender
              : currentStep === 3
              ? selectedLanguages
              : availableTimes
          }
          setItem={
            currentStep === 0
              ? setAgeGroup
              : currentStep === 1
              ? setLanguageLevel
              : currentStep === 2
              ? setPreferredGender
              : currentStep === 3
              ? handleLanguageSelect
              : handleTimeSelect
          }
          style={currentStep === 4 ? { display: 'flex', gap: '1em' } : {}}
        />
      </div>

      {/* 버튼 */}
      <s.ModalButtonContainer>
        <s.ModalButton
          onClick={handlePrevious}
          disabled={currentStep === 0}
          prevbtn
        >
          <img src={PrevIcon} alt="Previous" />
          <div>이전</div>
        </s.ModalButton>
        {currentStep < 4 ? (
          <s.ModalButton onClick={handleNext}>
            <div>다음</div>
            <img src={NextIcon} alt="Next" />
          </s.ModalButton>
        ) : (
          <s.ModalButton onClick={() => {handleSubmit(languageLevel, preferredGender, selectedLanguages, availableTimes)}}>
            <div>제출</div>
          </s.ModalButton>
        )}
      </s.ModalButtonContainer>
    </Modal>
  )
}

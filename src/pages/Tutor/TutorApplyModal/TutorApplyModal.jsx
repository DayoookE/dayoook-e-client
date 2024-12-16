import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import { XIcon } from '../../../assets/ModalComponent'
import * as s from './TutorApplyModal.style'

Modal.setAppElement('#root')

export default function TutorApplyModal({
  modalIsOpen,
  setIsOpen,
  card,
  handleSubmit,
  setMessage,
}) {
  const [dayId, setDayId] = useState(1)
  const [schedule, setSchedule] = useState([])
  const [selectedDay, setSelectedDay] = useState(1)
  const [selectedTime, setSelectedTime] = useState(1)

  useEffect(() => {
    setSelectedDay(null)
    setSelectedTime(null)
    const fetchSchedule = async () => {
      if (card.id) {
        // get /tutors/schedule/:tutorId
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_SPRING_API_URL}/tutors/schedule/${card.id}`
          )
          setSchedule(response.data.result?.tutorScheduleDataList)
        } catch (error) {
          console.error('Error fetching tutor details:', error)
        }
      }
    }
    fetchSchedule()
  }, [])

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
        <div>✨&nbsp;&nbsp;{card.name} 튜터</div>
        <img src={XIcon} alt="close" onClick={closeModal} />
      </s.ModalTitle>

      <s.DaySelectWrapper>
        <s.DayWrapper>
          {dayList.map((day, idx) => (
            <s.DayItem
              key={idx}
              onClick={() => setDayId(idx + 1)}
              isSelect={dayId === idx + 1}
            >
              {day}
            </s.DayItem>
          ))}
        </s.DayWrapper>
        <s.TimeWrapper>
          {timeList.map((time, idx) => (
            <s.TimeItem
              key={idx}
              isAvailable={
                schedule &&
                schedule.find(
                  (item) =>
                    item.day.id === dayId &&
                    item.timeSlot.id === idx + 1 &&
                    item.isAvailable
                )
              }
              isSelect={selectedTime === idx + 1 && selectedDay === dayId}
              onClick={() => {
                if (
                  schedule.find(
                    (item) =>
                      item.day.id === dayId &&
                      item.timeSlot.id === idx + 1 &&
                      item.isAvailable
                  )
                ) {
                  setSelectedDay(dayId)
                  setSelectedTime(idx + 1)
                }
              }}
            >
              {time}
            </s.TimeItem>
          ))}
        </s.TimeWrapper>
      </s.DaySelectWrapper>

      <s.ApplyTextArea
        placeholder="🫶 듣고 싶은 강의명을 적어주세요."
        onChange={(e) => setMessage(e.target.value)}
      />
      <s.Buttons>
        <div onClick={closeModal}>취소하기</div>
        <div onClick={() => handleSubmit(selectedDay, selectedTime)}>
          신청하기
        </div>
      </s.Buttons>
    </Modal>
  )
}

const dayList = [
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
  '일요일',
]
const timeList = [
  '오전 9시',
  '오전 10시',
  '오전 11시',
  '오후 12시',
  '오후 1시',
  '오후 2시',
  '오후 3시',
  '오후 4시',
  '오후 5시',
  '오후 6시',
  '오후 7시',
  '오후 8시',
  '오후 9시',
]

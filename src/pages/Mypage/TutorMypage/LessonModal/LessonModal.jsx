import Modal from 'react-modal'
import styled from 'styled-components'
import * as s from './LessonModal.style'

export default function LessonModal({
  modalIsOpen,
  setIsOpen,
  handleSubmit,
  classOpen,
}) {
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
      <div>hi</div>
      <LessonModalBtn onClick={handleSubmit}>
        {classOpen ? '수업 종료' : '수업 시작'}
      </LessonModalBtn>
    </Modal>
  )
}

export const LessonModalBtn = styled.div`
  color: red;
  background-color: pink;
`

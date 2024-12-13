import Modal from 'react-modal'
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
      <s.ApplyTextArea
        placeholder="🫶 듣고 싶은 강의명을 적어주세요."
        onChange={(e) => setMessage(e.target.value)}
      />
      <s.Buttons>
        <div onClick={closeModal}>취소하기</div>
        <div onClick={handleSubmit}>신청하기</div>
      </s.Buttons>
    </Modal>
  )
}

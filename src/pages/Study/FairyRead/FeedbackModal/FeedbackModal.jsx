import Modal from 'react-modal'
import { XIcon } from '../../../../assets/ModalComponent'
import { DayookFeedBackImg } from '../../../../assets/FairyList'
import * as s from './FeedbackModal.style'

export default function FeedBackModal({ modalIsOpen, setIsOpen, feedback }) {
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
      <s.ModalComponent>
        <s.XContainer>
          <div>🎀&nbsp;&nbsp;다육이의 발음 교실&nbsp;&nbsp;🎀</div>
          <img src={XIcon} alt="X" onClick={closeModal} />
        </s.XContainer>

        <s.FeedBackText>
          {feedback.split(' ').map((word, idx) => (
            <span key={idx}>
              {word}
              {word.endsWith('!') || word.endsWith('.') ? <br /> : ' '}
            </span>
          ))}
        </s.FeedBackText>

        <s.DayookImg>
          <div style={{ flex: 1 }}></div>
          <img src={DayookFeedBackImg} alt="Dayook" />
        </s.DayookImg>
      </s.ModalComponent>
    </Modal>
  )
}

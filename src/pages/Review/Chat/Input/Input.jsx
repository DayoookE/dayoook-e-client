import { useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import {
  RecordIcon,
  SendIcon,
  StopIcon,
} from '../../../../assets/Mypage/Review'
import * as s from './Input.style'

export default function Input() {
  const [sendActive, setSendActive] = useState(false)
  const [inputText, setInputText] = useState('')
  const [isRecord, setIsRecord] = useState(false)
  const { transcript, listening, resetTranscript } = useSpeechRecognition()

  const startRecording = () => {
    setInputText('')
    resetTranscript()
    setIsRecord(true)
    SpeechRecognition.startListening({ continuous: true, language: 'ko-KR' })
  }

  const stopRecording = () => {
    setIsRecord(false)
    SpeechRecognition.stopListening()
    setInputText(transcript)
    if (transcript.length > 0) {
      setSendActive(true)
    }
  }

  return (
    <s.InputContainer>
      {/* 채팅 입력창 */}
      <input
        type="text"
        value={inputText}
        placeholder="✍️ 메시지를 입력하세요"
        onChange={(e) => {
          setInputText(e.target.value)
          if (e.target.value.length > 0) {
            setSendActive(true)
          } else {
            setSendActive(false)
          }
        }}
      />

      {/* 채팅 입력 버튼 */}
      <s.ChatInputBtns>
        <s.SendBtn active={sendActive} src={SendIcon} alt="send" />
        {isRecord ? (
          <img src={StopIcon} alt="stop" onClick={stopRecording} />
        ) : (
          <img src={RecordIcon} alt="record" onClick={startRecording} />
        )}
      </s.ChatInputBtns>
    </s.InputContainer>
  )
}

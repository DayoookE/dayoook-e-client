import React, { useState, useRef, useEffect } from 'react'
import { BookContentImg } from '../../../../assets/Study'
import { GyeonWooImg } from '../../../../assets/FairyList'
import axios from 'axios'
import * as s from './FairyReadContent.style'
import FeedBackModal from '../FeedbackModal/FeedbackModal'

export default function FairyReadContent({ fontSize }) {
  const [pageIdx, setPageIdx] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [recording, setRecording] = useState(false)
  const [audioURL, setAudioURL] = useState(null)
  const mediaRecorderRef = useRef(null)
  const audioChunksRef = useRef([])
  const [feedback, setFeedback] = useState('다육이가 발음 교정을 시작합니다 ✨')
  const [modalIsOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (audioURL) {
      setFeedback('다육이가 발음 교정을 시작합니다 ✨')
      handleSubmit()
    }
  }, [audioURL])

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    mediaRecorderRef.current = new MediaRecorder(stream, {
      mimeType: 'audio/webm', // 'audio/webm'으로 설정
    })

    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data)
    }

    mediaRecorderRef.current.onstop = async () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' })
      const wavBlob = await convertToWav(audioBlob) // WAV로 변환
      const url = URL.createObjectURL(wavBlob)
      console.log('wavBlob:', wavBlob)
      console.log('url:', url)
      setAudioURL(url)
      audioChunksRef.current = []
    }

    mediaRecorderRef.current.start()
    setRecording(true)
  }

  const stopRecording = () => {
    mediaRecorderRef.current.stop()
    setRecording(false)
  }

  const handleSubmit = async () => {
    console.log('발음 교정 시작:', audioURL)
    if (!audioURL) return
    setIsOpen(true)

    try {
      const response = await fetch(audioURL)
      const blob = await response.blob() // URL에서 Blob 가져오기

      const formData = new FormData()
      formData.append('audio', blob, 'recording.wav') // Blob 추가
      formData.append('reference_text', gyeonuContent[pageIdx].text) // 필요한 다른 필드

      const uploadResponse = await axios.post(
        `${process.env.REACT_APP_FAST_API_URL}/ai/pronunciation_feedback`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      const { confidence, feedback, ground_truth, predicted } =
        uploadResponse.data.result
      console.log('발음 교정 결과:', uploadResponse.data.result)
      setFeedback(feedback)
    } catch (error) {
      console.error(
        '발음 교정 에러:',
        error.response ? error.response.data : error.message
      )
    }
  }

  const convertToWav = async (audioBlob) => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)()
    const arrayBuffer = await audioBlob.arrayBuffer()
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
    const wavBlob = audioBufferToWav(audioBuffer)
    return new Blob([wavBlob], { type: 'audio/wav' })
  }

  const audioBufferToWav = (buffer) => {
    const numChannels = buffer.numberOfChannels
    const sampleRate = buffer.sampleRate
    const format = numChannels === 1 ? 1 : 2 // 1: PCM, 2: interleaved
    const bitDepth = 16

    const byteLength = buffer.length * numChannels * (bitDepth / 8)
    const wavBuffer = new Uint8Array(44 + byteLength)
    const dataView = new DataView(wavBuffer.buffer)

    // WAV Header
    let offset = 0
    const writeString = (str) => {
      for (let i = 0; i < str.length; i++) {
        dataView.setUint8(offset++, str.charCodeAt(i))
      }
    }

    writeString('RIFF')
    dataView.setUint32(offset, 36 + byteLength, true)
    offset += 4
    writeString('WAVE')
    writeString('fmt ')
    dataView.setUint32(offset, 16, true)
    offset += 4
    dataView.setUint16(offset, format, true)
    offset += 2
    dataView.setUint16(offset, numChannels, true)
    offset += 2
    dataView.setUint32(offset, sampleRate, true)
    offset += 4
    dataView.setUint32(offset, sampleRate * numChannels * (bitDepth / 8), true)
    offset += 4
    dataView.setUint16(offset, numChannels * (bitDepth / 8), true)
    offset += 2
    dataView.setUint16(offset, bitDepth, true)
    offset += 2
    writeString('data')
    dataView.setUint32(offset, byteLength, true)
    offset += 4

    // Write PCM samples
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel)
      for (let i = 0; i < channelData.length; i++) {
        const sample = Math.max(-1, Math.min(1, channelData[i]))
        dataView.setInt16(
          44 + (i * numChannels + channel) * 2,
          sample < 0 ? sample * 0x8000 : sample * 0x7fff,
          true
        )
      }
    }

    return wavBuffer
  }

  const nextImage = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => setIsTransitioning(false), 200)
    setTimeout(
      () => setPageIdx((prevIndex) => (prevIndex + 1) % gyeonuContent.length),
      200
    )
  }

  const prevImage = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => setIsTransitioning(false), 200)
    setTimeout(
      () =>
        setPageIdx(
          (prevIndex) =>
            (prevIndex - 1 + gyeonuContent.length) % gyeonuContent.length
        ),
      200
    )
  }

  return (
    <s.ReadContent>
      <s.BookContentContainer>
        <s.BookTextWrapper>
          <s.BookText fontSize={fontSize}>
            {gyeonuContent[pageIdx].text.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </s.BookText>
          <s.ReadBtn
            recording={recording}
            onClick={recording ? stopRecording : startRecording}
          >
            {recording ? (
              <>🌱&nbsp;&nbsp;&nbsp;읽기 완료 !</>
            ) : (
              <>🌱&nbsp;&nbsp;&nbsp;다육이와 함께 읽어보기</>
            )}
          </s.ReadBtn>
          <FeedBackModal
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            feedback={feedback}
          />
        </s.BookTextWrapper>

        <img
          className={`slider-image ${isTransitioning ? 'fade-out' : ''}`}
          src={gyeonuContent[pageIdx].img}
          alt="book"
          onClick={(e) => {
            const width = e.currentTarget.clientWidth
            if (e.clientX < width / 2) {
              prevImage() // 왼쪽 클릭
            } else {
              nextImage() // 오른쪽 클릭
            }
          }}
        />
      </s.BookContentContainer>

      <s.TranslationContainer>
        宇和智女在一起的景象就像是一幅美丽的画。
      </s.TranslationContainer>
    </s.ReadContent>
  )
}

const gyeonuContent = [
  {
    img: BookContentImg,
    text: '1번째 페이지\n견우와 직녀가 함께 있는 모습은\n한 폭의 그림처럼 고왔더래요',
  },
  {
    img: GyeonWooImg,
    text: '2번째 페이지\n견우와 직녀가 함께 있는 모습은\n한 폭의 그림처럼 고왔더래요',
  },
  {
    img: BookContentImg,
    text: '3번째 페이지\n견우와 직녀가 함께 있는 모습은\n한 폭의 그림처럼 고왔더래요',
  },
  {
    img: GyeonWooImg,
    text: '4번째 페이지\n견우와 직녀가 함께 있는 모습은\n한 폭의 그림처럼 고왔더래요',
  },
]

import {
  EnterClassIcon,
  ExitClassIcon,
  LinkIcon,
} from '../../../../assets/Mypage/Tutor'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import * as s from './TuteeList.style'
import LessonModal from '../LessonModal/LessonModal'

export default function TuteeList() {
  const [userInfo, setUserInfo] = useState(null)
  const [tuteeList, setTuteeList] = useState([])
  const [lessonId, setLessonId] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('dayookeAccessToken')
        if (!token) {
          setUserInfo(null)
          return
        }
        const response = await axios.get(
          `${process.env.REACT_APP_SPRING_API_URL}/users/info`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        setUserInfo(response.data.result)
      } catch (error) {
        console.error('유저 정보 조회 실패:', error)
        setUserInfo(null)
      } finally {
        setLoading(false)
      }
    }
    fetchUserInfo()
  }, [])

  // 신청 튜티 목록
  useEffect(() => {
    const token = localStorage.getItem('dayookeAccessToken')
    const fetchTuteeList = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SPRING_API_URL}/tutors/application/${userInfo.id}?page=1`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        console.log('response:', response)
        setTuteeList(response?.data?.result.content || [])
      } catch (error) {
        console.error('Error fetching tutee list:', error)
      }
    }
    fetchTuteeList()
  }, [userInfo])

  return (
    <s.MyTuteeWrapper>
      <s.Title>✏️&nbsp;&nbsp;나의 튜티</s.Title>
      <s.ListWrapper>
        {tuteeList &&
          tuteeList.map((tutee) =>
            tutee.status === 'APPROVED' ? <TuteeItem tutee={tutee} /> : null
          )}
      </s.ListWrapper>
    </s.MyTuteeWrapper>
  )
}

const TuteeItem = ({ tutee }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalIsOpen, setIsOpenModal] = useState(false)
  const [sdlessonId, setSdLessonId] = useState(null)
  const [roomUrl, setRoomUrl] = useState(null)

  const [recording, setRecording] = useState(false)
  const [audioURL, setAudioURL] = useState(null)
  const mediaRecorderRef = useRef(null)
  const audioChunksRef = useRef([])

  console.log('tutee:', tutee)

  // 생성된 강의 링크 조회 API
  useEffect(() => {
    const token = localStorage.getItem('dayookeAccessToken')
    axios
      .get(
        `${process.env.REACT_APP_SPRING_API_URL}/lessons/${tutee.lessonId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log('response:', response)
        if (response.data.result?.status === 'SCHEDULED') {
          setIsOpen(true)
          setSdLessonId(response.data.result?.id)
          setRoomUrl(response.data.result?.meetingUri)
          startRecording()
          alert(
            '👏 수업이 이어지고 있습니다 !\n수업을 종료하시려면 꼭 다시 클릭해주세요 💪'
          )
        }
      })
      .catch((error) => {
        console.error('Error fetching lesson room url:', error)
      })
  }, [tutee.lessonId])

  const enterClassHandler = async (tuteeId) => {
    console.log('enter class:', tuteeId)
    // lessons/schedules 호출

    const token = localStorage.getItem('dayookeAccessToken')
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SPRING_API_URL}/lessons/schedules`,
        {
          lessonId: tutee.lessonId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      console.log('response:', response)
      startRecording()
      alert(
        '👏 수업이 시작되었습니다 !\n수업을 종료하시려면 꼭 다시 클릭해주세요 💪'
      )
      setSdLessonId(response.data.result.id)
      setRoomUrl(response.data.result.roomUrl)
      setIsOpen(true)
    } catch (error) {
      console.error('Error fetching lesson id:', error)
    }
  }

  const exitClassHandler = (tuteeId) => {
    console.log('exit class:', tuteeId)
    // lessons/schedules/{scheduleId}/complete patch 호출
    const token = localStorage.getItem('dayookeAccessToken')
    axios
      .patch(
        `${process.env.REACT_APP_SPRING_API_URL}/lessons/schedules/${sdlessonId}/complete`,
        {
          id: sdlessonId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log('response:', response)
      })
      .catch((error) => {
        console.error('Error exiting class:', error)
      })

    stopRecording()
    setIsOpen(false)
    alert('🙌 수업이 종료되었습니다\n수고하셨습니다 👍')
  }

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
    setRoomUrl(null)
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

  return (
    <s.TuteeItemWrapper>
      <img
        src={`${process.env.REACT_APP_S3_BUCKET}${tutee.tuteeInfo.profileUrl}`}
      />
      <s.InfoWrapper>
        <div style={{ display: 'flex' }}>
          {tutee.tuteeInfo.name}
          {roomUrl && (
            <s.RoomUrlImg
              src={LinkIcon}
              alt="link"
              onClick={() =>
                window.open(roomUrl, '_blank', 'noopener,noreferrer')
              }
            />
          )}
        </div>
        <div>{tutee.message}</div>
      </s.InfoWrapper>
      <s.DetailWrapper>
        {/* <s.ReviewDiv review={tutee.review}>
          {tutee.review ? '복습 완료' : '복습하기'}
        </s.ReviewDiv>
        <div>다음 수업: {tutee.nextClass}</div> */}
      </s.DetailWrapper>
      <s.EnterImg
        src={isOpen ? ExitClassIcon : EnterClassIcon}
        onClick={() =>
          isOpen ? exitClassHandler(tutee.id) : enterClassHandler(tutee.id)
        }
        alt="수업가기"
      />

      <LessonModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpenModal}
        handleSubmit={() => {
          isOpen ? exitClassHandler(tutee.id) : enterClassHandler(tutee.id)
        }}
      />
    </s.TuteeItemWrapper>
  )
}

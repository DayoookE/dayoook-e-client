import { useRef, useEffect } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'
import { BotImg, SpeakerIcon } from '../../../../assets/Mypage/Review'
import * as s from './ChatList.style'

export default function ChatList() {
  const { speak } = useSpeechSynthesis()
  const voices = window.speechSynthesis.getVoices()
  const koVoice = voices.find((voice) => voice.lang.includes('ko'))
  const chatScrollRef = useRef(null)

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight
    }
  }, [])

  return (
    <s.ChatListContainer ref={chatScrollRef}>
      {/* 채팅 내역 */}
      {chatList.map((chat, index) => (
        <div key={index}>
          {chat.type === 'bot' ? (
            // 챗봇 채팅
            <s.ChatItemBot
              imgVisible={index === 0 || chatList[index - 1].type !== chat.type}
            >
              <img src={BotImg} alt="bot" />
              <s.ChatItemText>
                <div>{chat.message}</div>
                <img
                  src={SpeakerIcon}
                  alt="speaker"
                  onClick={() =>
                    speak({
                      text: chat.message,
                      voice: voices[168] || koVoice,
                    })
                  }
                />
              </s.ChatItemText>
            </s.ChatItemBot>
          ) : (
            // 사용자 채팅
            <s.ChatItemUser>
              <div>{chat.message}</div>
            </s.ChatItemUser>
          )}
        </div>
      ))}
    </s.ChatListContainer>
  )
}

const chatList = [
  {
    type: 'bot',
    message: '안녕? 나는 다육이야. 만나서 반가워!',
  },
  {
    type: 'bot',
    message: '너의 이름은 뭐야?',
  },
  {
    type: 'user',
    message: '다유기야',
  },
  {
    type: 'bot',
    message: '다유기구나! 앞으로 잘 부탁해!',
  },
  {
    type: 'bot',
    message: '이번 수업 시간에는 어땠어?',
  },
  {
    type: 'user',
    message: '재미있었어',
  },
  {
    type: 'bot',
    message: '그래? 그럼 다음에 또 만나자!',
  },
  {
    type: 'bot',
    message: '다유기, 오늘 수고했어! 내일 또 놀러와줘',
  },
]

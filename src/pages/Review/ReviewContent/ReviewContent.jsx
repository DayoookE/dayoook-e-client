import { useState, useRef, useEffect } from 'react'
import { ReviewIcon } from '../../../assets/Mypage/Review'
import * as s from './ReviewContent.style'

export default function ReviewContent() {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false)
  const scrollRef = useRef(null)

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
      if (scrollTop + clientHeight >= scrollHeight) {
        setIsScrolledToBottom(true)
      }
    }
  }

  useEffect(() => {
    const div = scrollRef.current
    if (div) {
      div.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (div) {
        div.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <s.ReviewContentContainer>
      {/* 복습 제목 */}
      <s.ReviewTitle>
        <img src={ReviewIcon} alt="review" />
        <div>1주차 수업 복습</div>
      </s.ReviewTitle>

      {/* 복습 내용 */}
      <s.ReviewContentWrapper ref={scrollRef}>
        {reviewContent.map((content, index) => (
          <div key={index}>
            <s.ReviewContentTitle>{content.title}</s.ReviewContentTitle>
            <s.ReviewDescription>{content.description}</s.ReviewDescription>
          </div>
        ))}
      </s.ReviewContentWrapper>

      {/* 복습 완료 버튼 */}
      <s.ReviewButton active={isScrolledToBottom}>
        {isScrolledToBottom ? '복습 완료' : '다육이와 함께 복습을 해보아요 !'}
      </s.ReviewButton>
    </s.ReviewContentContainer>
  )
}

const reviewContent = [
  {
    title: '📍 자음이란?',
    description:
      '자음은 자음이다.\n자음에는 ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ이 있다.',
  },
  {
    title: '📍 모음이란?',
    description:
      '모음은 모음이다.\n모음에는 ㅏ, ㅑ, ㅓ, ㅕ, ㅗ, ㅛ, ㅜ, ㅠ, ㅡ, ㅣ가 있다.',
  },
  {
    title: '📍 자음과 모음이 만나면?',
    description:
      '자음과 모음이 만나면 글자가 된다.\n예를 들어, ㅎ + ㅏ = 하\nㄱ + ㅏ = 가',
  },
  {
    title: '👍 도전해보기',
    description:
      '첫번째, 부모님께 자음과 모음을 설명해보세요 ☺️\n두번째, 가족의 이름에 어떤 자음과 모음이 있는지 찾아보세요 🧐\n세번째, 자음과 모음을 이용하여 단어를 만들어보세요 🤩',
  },
  {
    title: '🥳 다음 시간 준비하기',
    description:
      '다음 시간에는 화상 회의로 수업이 진행될 예정이니, 미리 준비해주세요!\n\n1. 카메라와 마이크가 정상적으로 작동하는지 확인해주세요.\n2. 수업에 필요한 교재와 필기 도구를 준비해주세요.\n3. 수업 시작 10분 전에 준비를 마치고, 화상 회의 링크를 클릭해주세요.\n\n어렵거나 궁금한 점이 있으면 언제든지 질문해주세요!\n다음 시간에 만나요 🥰',
  },
]

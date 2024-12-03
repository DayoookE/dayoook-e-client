import { useState } from 'react'
import Chat from '../Chat/Chat'
import ReviewContent from '../ReviewContent/ReviewContent'
import * as s from './Content.style'

export default function Content() {
  const [contentType, setContentType] = useState('review')

  return (
    <s.ContentContainer>
      {/* 컨텐츠 버튼 */}
      <s.ButtonWrapper>
        <s.ButtonContainer
          review
          onClick={() => setContentType('review')}
          className={contentType === 'review' ? 'active' : ''}
        >
          <div>수업 복습하기</div>
        </s.ButtonContainer>
        <s.ButtonContainer
          chat
          onClick={() => setContentType('chat')}
          className={contentType === 'chat' ? 'active' : ''}
        >
          <div>다육이랑 대화하기</div>
        </s.ButtonContainer>
      </s.ButtonWrapper>

      {/* 컨텐츠 */}
      <s.ReviewContentContainer>
        {contentType === 'review' ? <ReviewContent /> : <Chat />}
      </s.ReviewContentContainer>
    </s.ContentContainer>
  )
}

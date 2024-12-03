import React, { useState } from 'react'
import { BookContentImg } from '../../../../assets/Study'
import { FairyImg, GyeonWooImg } from '../../../../assets/FairyList'
import * as s from './FairyReadContent.style'

export default function FairyReadContent({ fontSize }) {
  const [pageIdx, setPageIdx] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

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
      {/* 동화 컨텐츠 */}
      <s.BookContentContainer>
        {/* 동화 내용 */}
        <s.BookTextWrapper>
          <s.BookText fontSize={fontSize}>
            {gyeonuContent[pageIdx].text.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </s.BookText>
          <s.ReadBtn>🌱&nbsp;&nbsp;&nbsp;다육이와 함께 읽어보기</s.ReadBtn>
        </s.BookTextWrapper>

        {/* 동화 그림 */}
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

      {/* 번역 내용 */}
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
  {
    img: FairyImg,
    text: '5번째 페이지\n견우와 직녀가 함께 있는 모습은\n한 폭의 그림처럼 고왔더래요',
  },
]

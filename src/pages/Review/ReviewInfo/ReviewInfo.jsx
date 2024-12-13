import { useState, useEffect } from 'react'
import {
  AwardIcon,
  ListDownIcon,
  ListUpIcon,
} from '../../../assets/Mypage/Review'
import axios from 'axios'
import * as s from './ReviewInfo.style'

export default function ReviewInfo() {
  const [isReviewListOpen, setIsReviewListOpen] = useState(false)
  const [reviewList, setReviewList] = useState([])

  useEffect(() => {
    // 복습 리스트 api 연동
    const fetchReviewList = async () => {
      try {
        const token = localStorage.getItem('dayookeAccessToken')
        if (!token) {
          return
        }

        const response = await axios.get(
          `${process.env.REACT_APP_FAST_API_URL}/review`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        console.log(response.data.lesson_schedules)
        setReviewList(response.data.lesson_schedules)
      } catch (error) {
        console.error('복습 리스트 조회 실패:', error)
      }
    }
    fetchReviewList()
  }, [])

  return (
    <s.ReviewInfoContainer>
      {/* 복습 주차 */}
      <s.TitleContainer>
        <div>
          <div>1주차 복습</div>
          <div>2024년 11월 6일 수요일</div>
        </div>
        <img
          src={isReviewListOpen ? ListUpIcon : ListDownIcon}
          alt="list"
          onClick={() => setIsReviewListOpen(!isReviewListOpen)}
        />
      </s.TitleContainer>

      {isReviewListOpen && (
        <s.ReviewListPosition>
          <s.ReviewListContainer>
            {reviewList.length > 0 ? (
              reviewList.map((review, index) => (
                <s.ReviewList key={index}>
                  <div>✨&nbsp;&nbsp;{review.week}주차</div>
                  <div>{review.date}</div>
                </s.ReviewList>
              ))
            ) : (
              <s.EmptyContent>
                😢&nbsp;&nbsp;복습 내용이 없습니다
              </s.EmptyContent>
            )}
          </s.ReviewListContainer>
        </s.ReviewListPosition>
      )}

      {/* 획득 포인트 */}
      <s.PointContainer>
        <s.PointContent>
          <img src={AwardIcon} alt="award" />
          <s.PointText>
            <div>획득한 포인트</div>
            <div>85</div>
          </s.PointText>
        </s.PointContent>
        {/* 획득 포인트 프로그레스 바 */}
        <s.ProgressBarContainer>
          <s.Progress progress={85} />
          <s.FixedCircle></s.FixedCircle>
        </s.ProgressBarContainer>
      </s.PointContainer>

      {/* 응원 문구 */}
      <s.CheerContainer>
        <div>
          안녕, 다유기야!
          <br />
          오늘도 응원할게
        </div>
      </s.CheerContainer>
    </s.ReviewInfoContainer>
  )
}

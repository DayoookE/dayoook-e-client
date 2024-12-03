import { AwardIcon } from '../../../assets/Mypage/Review'
import * as s from './ReviewInfo.style'

export default function ReviewInfo() {
  return (
    <s.ReviewInfoContainer>
      {/* 복습 주차 */}
      <s.TitleContainer>
        <div>1주차 복습</div>
        <div>2024년 11월 6일 수요일</div>
      </s.TitleContainer>

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

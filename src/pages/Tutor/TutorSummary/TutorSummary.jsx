import { StarIcon } from '../../../assets/icon'
import { Face1 } from '../../../assets/face'
import * as s from './TutorSummary.style'

export default function TutorSummary() {
  return (
    <s.TutorSummaryContainer>
      <s.Title>튜터 소개 요약</s.Title>
      <s.TutorSummaryCard>
        <s.SummaryProfile>
          <s.SummaryImg src={Face1} alt="user" />
          <s.SummaryTitle>
            <div>백종원</div>
            <div>
              {Array.from({ length: 5 }, (_, idx) => (
                <img key={idx} src={StarIcon} alt="star" />
              ))}
            </div>
          </s.SummaryTitle>
        </s.SummaryProfile>

        <s.SummaryContent>
          <s.SummaryDetail>
            <div>튜티 주 연령</div>
            <div>영유아, 10대</div>
          </s.SummaryDetail>
          <s.SummaryDetail lang>
            <div>가능 언어</div>
            <div>🇰🇷 🇨🇳 🇷🇺 🇻🇳 🇵🇭</div>
          </s.SummaryDetail>
          <s.SummaryDetail>
            <div>튜티 소개</div>
            <div>
              안녕하세요!
              <br />
              전세계를 돌아다니며 음식과 함께 언어를 배운 백종원입니다.
              <br />
              <br />
              어느 나라에 가서든지 음식 주문하는 데에 문제 없게끔
              만들어드리겠습니다
            </div>
          </s.SummaryDetail>
          <s.SummaryDetail career>
            <div>경력</div>
            <div>
              인하대학교 국어교육과 학사
              <br />
              인하대학교 다문화교육 석사
              <br />
              인하대학교 국어교육과 교수
            </div>
          </s.SummaryDetail>
        </s.SummaryContent>

        <s.SummaryApplyButton>튜티 신청하기</s.SummaryApplyButton>
      </s.TutorSummaryCard>
    </s.TutorSummaryContainer>
  )
}

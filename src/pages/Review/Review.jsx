import { NavBar } from '../../components'
import Content from './Content/Content'
import ReviewInfo from './ReviewInfo/ReviewInfo'
import ReviewMenu from './ReviewMenu/ReviewMenu'
import * as s from './Review.style'

export default function Review({ setIsLogin }) {
  return (
    <s.ReviewWrapper>
      <s.MainContainer>
        {/* 복습 페이지 네비바 */}
        <NavBar setIsLogin={setIsLogin} />
        <s.ReviewContainer>
          {/* 복습 페이지 메뉴바 */}
          <ReviewMenu />

          <s.ContentContainer>
            {/* 복습 상세 정보 */}
            <ReviewInfo />
            {/* 복습 컨텐츠 */}
            <Content />
          </s.ContentContainer>
        </s.ReviewContainer>
      </s.MainContainer>
    </s.ReviewWrapper>
  )
}

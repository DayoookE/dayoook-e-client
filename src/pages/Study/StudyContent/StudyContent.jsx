import { useState } from 'react'
import { MenuBar } from '../../../components'
import FairyList from '../FairyList/FairyList'
import StudyBottom from '../StudyBottom/StudyBottom'
import StudyOption from './StudyOption/StudyOption'
import { TitleIcon } from '../../../assets/Study'
import * as s from './StudyContent.style'

export default function StudyContent({ setPageState }) {
  const [nationSelect, setNationSelect] = useState('korea')
  console.log(nationSelect)

  return (
    <s.StudyContentWrapper>
      {/* 학습 페이지 메뉴바 */}
      <s.MainMenuContainer>
        <s.StudyTitle>
          <img src={TitleIcon} alt="title" />
          <div>다육이의 동화 세상</div>
        </s.StudyTitle>
        <MenuBar />
      </s.MainMenuContainer>

      {/* 동화책 선택 옵션 */}
      <StudyOption
        nationSelect={nationSelect}
        setNationSelect={setNationSelect}
      />

      {/* 동화책 리스트 */}
      <FairyList setPageState={setPageState} nationSelect={nationSelect} />

      {/* 학습 페이지 아래 부분 */}
      <StudyBottom type="study" />
    </s.StudyContentWrapper>
  )
}

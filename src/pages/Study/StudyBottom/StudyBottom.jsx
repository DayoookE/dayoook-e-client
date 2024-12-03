import SetFontSize from './SetFontSize/SetFontSize'
import {
  FairyIcon,
  ShakeIcon,
  GameIcon,
  TalkIcon,
  PointIcon,
  TranslationIcon,
  ReadIcon,
} from '../../../assets/Study'
import * as s from './StudyBottom.style'

export default function StudyBottom({ type, fontSize, setFontSize }) {
  return (
    <s.StudyBottomContainer>
      {/* 학습 네비바 */}
      <s.StudyNavBar>
        {navItemList[type].map((item, idx) => (
          <s.NavItem key={idx} disable={idx != 0}>
            <img src={item.icon} alt={item.text} />
            <div>{item.text}</div>
          </s.NavItem>
        ))}
        {type === 'read' && (
          <s.NavItem>
            <SetFontSize fontSize={fontSize} setFontSize={setFontSize} />
            <div>글자 크기</div>
          </s.NavItem>
        )}
      </s.StudyNavBar>

      {/* 획득 포인트 */}
      <s.PointContainer>
        <s.NavItem point>
          <img src={PointIcon} alt="point" />
          <div>100</div>
        </s.NavItem>
      </s.PointContainer>
    </s.StudyBottomContainer>
  )
}

const navItemList = {
  study: [
    { icon: FairyIcon, text: '동화' },
    { icon: ShakeIcon, text: '동요' },
    { icon: GameIcon, text: '게임' },
    { icon: TalkIcon, text: '말하기' },
  ],
  read: [
    { icon: TranslationIcon, text: '번역' },
    { icon: ReadIcon, text: '읽어주기' },
  ],
}

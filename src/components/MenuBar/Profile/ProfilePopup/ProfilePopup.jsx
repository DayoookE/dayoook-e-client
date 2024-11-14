import {
  BookIcon,
  MypageIcon,
  SettingIcon,
  StudyIcon,
  UserIcon,
  CoinIcon,
} from '../../../../assets/MenuBar'
import { SproutIcon } from '../../../../assets/level'
import * as s from './ProfilePopup.style'

export default function ProfilePopup() {
  return (
    <s.ProfilePopupContainer className="profile-popup">
      <s.PopupTopMenu>
        <img src={MypageIcon} alt="마이페이지" />
        <img src={SettingIcon} alt="설정" />
      </s.PopupTopMenu>
      <s.PopupUserImg src={UserIcon} alt="유저" />
      <s.PopupUserName>
        <img src={SproutIcon} alt="레벨" />
        <div>다유기</div>
      </s.PopupUserName>

      <s.PopupContent>
        {contentItems.map((item, index) => (
          <s.PopupContentItem
            key={index}
            first={index == 0}
            center={index == 1}
          >
            <div>{item.text}</div>
            <img src={item.icon} alt={item.text} />
          </s.PopupContentItem>
        ))}
      </s.PopupContent>
    </s.ProfilePopupContainer>
  )
}

const contentItems = [
  { text: '100 포인트', icon: CoinIcon },
  { text: '이어서 학습하기', icon: StudyIcon },
  { text: '복습하러 가기', icon: BookIcon },
]

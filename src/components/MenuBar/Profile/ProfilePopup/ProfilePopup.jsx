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

// 등급 매핑 함수
const getLevelName = (level) => {
  const levelMapping = {
    SEEDLING: '새싹',
    STEM: '줄기',
    LEAF: '잎',
    FLOWER: '꽃',
    FRUIT: '열매',
  }
  return levelMapping[level] || '알 수 없음'
}

export default function ProfilePopup({ userInfo, navigate }) {
  if (!userInfo) return null // userInfo가 없으면 렌더링하지 않음

  const { name, level, profileUrl, point } = userInfo
  const levelName = getLevelName(level)
  const fullProfileUrl = `${process.env.REACT_APP_S3_BUCKET}${profileUrl}` // 프로필 이미지 URL 조합

  return (
    <s.ProfilePopupContainer className="profile-popup">
      <s.PopupTopMenu>
        <img
          src={MypageIcon}
          alt="마이페이지"
          onClick={() => navigate('/mypage')}
        />
        <img src={SettingIcon} alt="설정" onClick={() => navigate('/mypage')} />
      </s.PopupTopMenu>
      <s.PopupUserImg src={fullProfileUrl || UserIcon} alt="유저" />{' '}
      {/* 프로필 이미지 */}
      <s.PopupUserName>
        <img src={SproutIcon} alt="레벨" />
        <div>{name}</div> {/* 이름과 매핑된 레벨 */}
      </s.PopupUserName>
      <s.PopupContent>
        {contentItems(point).map((item, index) => (
          <s.PopupContentItem
            key={index}
            first={index === 0}
            center={index === 1}
            onClick={() => navigate(item.url)}
          >
            <div>{item.text}</div>
            <img src={item.icon} alt={item.text} />
          </s.PopupContentItem>
        ))}
      </s.PopupContent>
    </s.ProfilePopupContainer>
  )
}

// 콘텐츠 아이템 구성
const contentItems = (point) => [
  { text: `${point} 포인트`, icon: CoinIcon, url: '/mypage' },
  { text: '공부하러 가기', icon: StudyIcon, url: '/study' },
  { text: '복습하러 가기', icon: BookIcon, url: '/mypage' },
]

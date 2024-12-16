import { DropdownIcon, DropdownWhiteIcon } from '../../../assets/MenuBar'
import { SproutIcon } from '../../../assets/level'
import ProfilePopup from './ProfilePopup/ProfilePopup'
import * as s from '../MenuBar.style'
import * as ps from './Profile.style'

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

export default function Profile({ isStudy, userInfo, navigate }) {
  if (!userInfo) return null // userInfo가 없으면 아무것도 렌더링하지 않음

  const { name, level, profileUrl } = userInfo
  const levelName = getLevelName(level)

  return (
    <ps.DropdownContainer>
      <img src={SproutIcon} alt="레벨" />
      <ps.ProfileMenu isStudy={isStudy}>
        <div>{name}</div> {/* 유저 이름 */}
        <div>{levelName} 학생</div> {/* 매핑된 레벨 이름 */}
      </ps.ProfileMenu>
      <s.MenuIcon
        profile
        src={isStudy ? DropdownWhiteIcon : DropdownIcon}
        alt="드롭다운"
      />
      <ProfilePopup userInfo={userInfo} navigate={navigate} />
    </ps.DropdownContainer>
  )
}

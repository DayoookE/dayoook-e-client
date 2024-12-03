import { DropdownIcon, DropdownWhiteIcon } from '../../../assets/MenuBar'
import { SproutIcon } from '../../../assets/level'
import ProfilePopup from './ProfilePopup/ProfilePopup'
import * as s from '../MenuBar.style'
import * as ps from './Profile.style'

export default function Profile({ isStudy }) {
  return (
    <ps.DropdownContainer>
      <img src={SproutIcon} alt="레벨" />
      <ps.ProfileMenu isStudy={isStudy}>
        <div>다유기</div>
        <div>새싹 학생</div>
      </ps.ProfileMenu>
      <s.MenuIcon
        profile
        src={isStudy ? DropdownWhiteIcon : DropdownIcon}
        alt="드롭다운"
      />

      <ProfilePopup />
    </ps.DropdownContainer>
  )
}

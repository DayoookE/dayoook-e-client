import { DropdownIcon } from '../../../assets/MenuBar'
import { SproutIcon } from '../../../assets/level'
import ProfilePopup from './ProfilePopup/ProfilePopup'
import * as s from '../MenuBar.style'
import * as ps from './Profile.style'

export default function Profile() {
  return (
    <ps.DropdownContainer>
      <img src={SproutIcon} alt="레벨" />
      <ps.ProfileMenu>
        <div>다유기</div>
        <div>새싹 학생</div>
      </ps.ProfileMenu>
      <s.MenuIcon profile src={DropdownIcon} alt="드롭다운" />

      <ProfilePopup />
    </ps.DropdownContainer>
  )
}

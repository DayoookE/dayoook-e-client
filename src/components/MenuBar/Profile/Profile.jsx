import { DropdownIcon, DropdownWhiteIcon } from '../../../assets/MenuBar'
import { SproutIcon } from '../../../assets/level'
import ProfilePopup from './ProfilePopup/ProfilePopup'
import * as s from '../MenuBar.style'
import * as ps from './Profile.style'
import { useEffect, useState } from 'react'
import axios from 'axios'

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
  const [name, setName] = useState('')
  const [level, setLevel] = useState('')
  const [profileUrl, setProfileUrl] = useState('')

  // users/info
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('dayookeAccessToken')
        if (!token) {
          setName(null)
          setLevel(null)
          setProfileUrl(null)
          return
        }
        const response = await axios.get(
          `${process.env.REACT_APP_SPRING_API_URL}/users/info`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        setName(response.data.result.name)
        setLevel(response.data.result.level)
        setProfileUrl(response.data.result.profileUrl)
      } catch (error) {
        console.error('유저 정보 조회 실패:', error)
        setName(null)
        setLevel(null)
        setProfileUrl(null)
      }
    }
    fetchUserInfo()
  }, [])

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

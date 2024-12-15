import { useLocation, useNavigate } from 'react-router-dom'
import {
  HomeGreen,
  HomeWhite,
  TutorGreen,
  TutorWhite,
  Logo,
  Logout,
  StudyGreen,
  StudyWhite,
  MypageGreen,
  MypageWhite,
  TutorMypageIcon,
} from '../../assets/NavBar'
import * as s from './NavBar.style'

export default function NavBar({ setIsLogin, isTutor }) {
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname

  const handleLogout = () => {
    const selectElement = document.querySelector('.goog-te-combo')
    if (selectElement) {
      selectElement.value = 'ko'
      selectElement.dispatchEvent(new Event('change'))
    }
    localStorage.setItem('language', 'ko')

    // 로그아웃 시, 로컬스토리지에 저장된 정보 삭제
    localStorage.removeItem('dayookeAccessToken')
    localStorage.removeItem('dayookeUserRole')
    setIsLogin(false)
  }

  const handleNavClick = (path) => {
    navigate(path)
  }

  return (
    <s.NavBarContainer isTutor={isTutor}>
      <s.Logo src={Logo} alt="Logo" onClick={() => navigate('/')} />
      {!isTutor &&
        NavItemContent.map((item) => (
          <NavItem
            key={item.text}
            isActive={
              path == item.path ||
              ((item.path == '/study' || item.path == '/mypage') &&
                path.includes(item.path))
            }
            icon={
              path == item.path ||
              ((item.path == '/study' || item.path == '/mypage') &&
                path.includes(item.path))
                ? item.activeIcon
                : item.icon
            }
            text={item.text}
            onClick={
              item.text == '로그아웃'
                ? handleLogout
                : () => handleNavClick(item.path)
            }
            isLogout={item.text == '로그아웃'}
          />
        ))}
      {isTutor &&
        TutorNavItemContent.map((item) => (
          <NavItem
            isTutor={isTutor}
            key={item.text}
            isActive={path == item.path}
            icon={path == item.path ? item.activeIcon : item.icon}
            text={item.text}
            onClick={
              item.text == '로그아웃'
                ? handleLogout
                : () => handleNavClick(item.path)
            }
            isLogout={item.text == '로그아웃'}
          />
        ))}
    </s.NavBarContainer>
  )
}

const NavItem = ({ icon, text, isActive, isLogout, onClick, isTutor }) => {
  return (
    <s.NavItem active={isActive} isLogout={isLogout} onClick={onClick}>
      <s.NavIcon src={icon} alt={text} />
      <s.NavText isTutor={isTutor} active={isActive}>
        {text}
      </s.NavText>
    </s.NavItem>
  )
}

const TutorNavItemContent = [
  {
    activeIcon: TutorMypageIcon,
    icon: MypageWhite,
    text: '마이페이지',
    path: '/mypage',
  },
  {
    activeIcon: Logout,
    icon: Logout,
    text: '로그아웃',
    path: '/login',
  },
]

const NavItemContent = [
  {
    activeIcon: HomeGreen,
    icon: HomeWhite,
    text: '홈',
    path: '/',
  },
  {
    activeIcon: TutorGreen,
    icon: TutorWhite,
    text: '튜터 목록',
    path: '/tutorlist',
  },
  {
    activeIcon: StudyGreen,
    icon: StudyWhite,
    text: '학습',
    path: '/study',
  },
  {
    activeIcon: MypageGreen,
    icon: MypageWhite,
    text: '마이페이지',
    path: '/mypage',
  },
  {
    activeIcon: Logout,
    icon: Logout,
    text: '로그아웃',
    path: '/login',
  },
]

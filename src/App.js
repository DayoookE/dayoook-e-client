import './App.css'
import { Route, Routes } from 'react-router'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { Login, Main, Tutor, Study, FairyRead, Mypage, Review } from './pages'
import TutorMypage from './pages/Mypage/TutorMypage/TutorMypage'
import { UserProvider } from './components/common/UserContext'
import { MappingProvider } from './components/common/MappingContext'

// 로그인 여부와 튜터 여부를 체크하는 PrivateRoute
const PrivateRoute = ({ isLogin, isTutor, children }) => {
  if (!isLogin) {
    return <Navigate to="/login" />
  }
  if (isTutor) {
    return <Navigate to="/mypage" />
  }
  return children
}

function App() {
  const [isTutor, setIsTutor] = useState(
    localStorage.getItem('dayookeUserRole') == 'TUTOR'
  )
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem('dayookeAccessToken') !== null
  )

  // 페이지 새로고침 시 로그인 상태 유지
  // useEffect(() => {
  //   const token = localStorage.getItem('dayookeAccessToken')
  //   if (token) {
  //     setIsLogin(true)
  //     // localStorage에 저장된 role로 튜터 여부 확인
  //     const role = localStorage.getItem('userRole')
  //     setIsTutor(role === 'TUTOR')
  //   }
  // }, [])

  // 로그아웃 핸들러
  const handleLogout = () => {
    localStorage.removeItem('dayookeAccessToken')
    localStorage.removeItem('userRole')
    setIsLogin(false)
    setIsTutor(false)
  }

  return (
    <UserProvider>
      <MappingProvider>
        <Routes>
          <Route
            path="/login"
            element={
              isLogin ? (
                <Navigate to="/" replace />
              ) : (
                <Login setIsLogin={setIsLogin} setIsTutor={setIsTutor} />
              )
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute isLogin={isLogin} isTutor={isTutor}>
                <Main handleLogout={handleLogout} setIsLogin={setIsLogin} />
              </PrivateRoute>
            }
          />
          <Route
            path="/tutorlist"
            element={
              <PrivateRoute isLogin={isLogin} isTutor={isTutor}>
                <Tutor handleLogout={handleLogout} setIsLogin={setIsLogin} />
              </PrivateRoute>
            }
          />
          <Route
            path="/study"
            element={
              <PrivateRoute isLogin={isLogin} isTutor={isTutor}>
                <Study handleLogout={handleLogout} setIsLogin={setIsLogin} />
              </PrivateRoute>
            }
          />
          <Route
            path="/mypage"
            element={
              isLogin ? (
                isTutor ? (
                  <TutorMypage
                    handleLogout={handleLogout}
                    setIsLogin={setIsLogin}
                  />
                ) : (
                  <Mypage handleLogout={handleLogout} setIsLogin={setIsLogin} />
                )
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/study/fairyread/:fairyId"
            element={
              <PrivateRoute isLogin={isLogin} isTutor={isTutor}>
                <FairyRead
                  handleLogout={handleLogout}
                  setIsLogin={setIsLogin}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/mypage/review/:mentoringId"
            element={
              <PrivateRoute isLogin={isLogin} isTutor={isTutor}>
                <Review handleLogout={handleLogout} setIsLogin={setIsLogin} />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MappingProvider>
    </UserProvider>
  )
}

export default App

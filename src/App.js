import './App.css'
import { Route, Routes } from 'react-router'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Login, Main, Tutor, Study, FairyRead, Mypage, Review } from './pages'
import TutorMypage from './pages/Mypage/TutorMypage/TutorMypage'

const PrivateRoute = ({ isTutor, children }) => {
  if (isTutor) {
    return <Navigate to="/mypage" />
  }
  return children
}

function App() {
  const [isTutor, setIsTutor] = useState(true)
  const [isLogin, setIsLogin] = useState(false)

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isLogin ? (
            <Navigate to="/" replace />
          ) : (
            <Login setIsLogin={setIsLogin} />
          )
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute isTutor={isTutor}>
            <Main setIsLogin={setIsLogin} />
          </PrivateRoute>
        }
      />
      <Route
        path="/tutorlist"
        element={
          <PrivateRoute isTutor={isTutor}>
            <Tutor setIsLogin={setIsLogin} />
          </PrivateRoute>
        }
      />
      <Route
        path="/study"
        element={
          <PrivateRoute isTutor={isTutor}>
            <Study setIsLogin={setIsLogin} />
          </PrivateRoute>
        }
      />
      <Route
        path="/mypage"
        element={
          isTutor ? (
            <TutorMypage setIsLogin={setIsLogin} />
          ) : (
            <Mypage setIsLogin={setIsLogin} />
          )
        }
      />
      <Route
        path="/study/fairyread/:fairyId"
        element={
          <PrivateRoute isTutor={isTutor}>
            <FairyRead setIsLogin={setIsLogin} />
          </PrivateRoute>
        }
      />
      <Route
        path="/mypage/review/:mentoringId"
        element={
          <PrivateRoute isTutor={isTutor}>
            <Review setIsLogin={setIsLogin} />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App

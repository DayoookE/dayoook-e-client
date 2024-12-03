import './App.css'
import { Route, Routes } from 'react-router'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Login, Main, Tutor, Study, FairyRead, Mypage, Review } from './pages'

function App() {
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
      <Route path="/" element={<Main setIsLogin={setIsLogin} />} />
      <Route path="/tutorlist" element={<Tutor setIsLogin={setIsLogin} />} />
      <Route path="/study" element={<Study setIsLogin={setIsLogin} />} />
      <Route path="/mypage" element={<Mypage setIsLogin={setIsLogin} />} />
      <Route
        path="/study/fairyread/:fairyId"
        element={<FairyRead setIsLogin={setIsLogin} />}
      />
      <Route
        path="/mypage/review/:mentoringId"
        element={<Review setIsLogin={setIsLogin} />}
      />
    </Routes>
  )
}

export default App

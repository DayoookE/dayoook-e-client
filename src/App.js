import './App.css'
import { Route, Routes } from 'react-router'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Login, Main } from './pages'

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
      <Route path="tutorlist" element={<Main setIsLogin={setIsLogin} />} />
    </Routes>
  )
}

export default App

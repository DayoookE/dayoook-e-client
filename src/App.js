import './App.css'
import { Route, Routes } from 'react-router'
import Login from './pages/Login/Login'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<div>Main</div>} />
    </Routes>
  )
}

export default App

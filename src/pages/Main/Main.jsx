import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Home, Assistant, Info } from '.'
import { MenuBar, NavBar } from '../../components'
import ModalComponent from '../../components/ModalComponent/ModalComponent'
import * as s from './Main.style'

export default function Main({ setIsLogin }) {
  const navigate = useNavigate()
  const [modalIsOpen, setIsOpen] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('dayookeAccessToken')
        if (!token) {
          setIsLogin(false)
          navigate('/login')
          return
        }

        // users/info API 호출 - axios 인스턴스 생성하여 사용
        const axiosInstance = axios.create({
          baseURL: process.env.REACT_APP_SPRING_API_URL,
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });

        const response = await axiosInstance.get('/users/info');
        console.log('유저 정보 조회 성공:', response.data)
        setUserInfo(response.data.result)
      } catch (error) {
        console.error('유저 정보 조회 실패:', error.response || error)
        if (error.response?.status === 401) {
          setIsLogin(false)
          navigate('/login')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchUserInfo()
  }, [navigate, setIsLogin])

  const handleSubmit = () => {
    setIsOpen(false)
    navigate('/tutorlist', {
      state: {
        isRecommend: true,
      },
    })
  }

  if (loading) return <div>로딩 중...</div>

  return (
      <s.MainContainer>
        <NavBar setIsLogin={setIsLogin} userInfo={userInfo} />
        <s.Content>
          <s.MainMenuContainer>
            <s.RecommendButton onClick={() => setIsOpen(true)}>
              🌱 다육이에게 튜터 추천받기
            </s.RecommendButton>
            <ModalComponent
                handleSubmit={handleSubmit}
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
            />
            <MenuBar userInfo={userInfo} />
          </s.MainMenuContainer>
          <s.ContentContainer>
            <Home userInfo={userInfo} />
            <Assistant userInfo={userInfo} />
          </s.ContentContainer>
          <Info />
        </s.Content>
      </s.MainContainer>
  )
}
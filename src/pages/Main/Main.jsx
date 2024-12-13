import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {Home, Assistant, Info} from '.'
import {MenuBar, NavBar} from '../../components'
import ModalComponent from '../../components/ModalComponent/ModalComponent'
import * as s from './Main.style'
import axios from 'axios'


export default function Main({setIsLogin}) {
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


    const handleSubmit = async (languageLevel, preferredGender, selectedLanguages, availableTimes, currentStep) => {
        try {
            setIsOpen(false)
            const times = ["오전", "오후", "저녁"]

            const preferred_days = []
            const preferred_times = []

            availableTimes.forEach(item => {
                if (times.includes(item))
                    preferred_times.push(item)
                else if (item === "평일") {
                    preferred_days.push("월")
                    preferred_days.push("화")
                    preferred_days.push("수")
                    preferred_days.push("목")
                    preferred_days.push("금")
                } else if (item === "주말") {
                    preferred_days.push("토")
                    preferred_days.push("일")
                }
            })

            const response = await axios.post(
                `${process.env.REACT_APP_FAST_API_URL}/ai/recommend`,
                {
                    language: selectedLanguages.map(text => {
                        return text
                            .replace(/[^가-힣]/g, '')
                            .trim();
                    }),
                    preferred_time: preferred_times,
                    preferred_day: preferred_days,
                    level: languageLevel,
                    gender: preferredGender === "남자" ? "남성" : "여성"
                }
            )
            const recommends = response?.data?.recommends
            if (recommends) {
                const promises = recommends.map(async (tutor) => {
                    const response = await axios.get(`${process.env.REACT_APP_SPRING_API_URL}/tutors/${tutor.tutor_id}`, {})
                    return response.data?.result
                })
                const results = await Promise.all(promises);
                console.log("Results of tutor search: ", results)
                navigate('/tutorlist', {
                    state: {
                        isRecommend: true,
                        recommendTutors: results
                    },
                })
            }

        } catch (err) {
            console.error('API 호출 또는 데이터 처리 중 오류 발생:', err);
        }
    }

  // 유저 정보가 없을 경우 다시 호출
  useEffect(() => {
    if (!userInfo && !loading) {
      fetchUserInfo()
          .then(() => {
            console.log('유저 정보를 성공적으로 다시 불러왔습니다.');
          })
          .catch((error) => {
            console.error('유저 정보 재조회 중 오류 발생:', error);
          });
    }
  }, [userInfo, loading, fetchUserInfo]);

  if (loading) return <div>로딩 중...</div>

    return (
        <s.MainContainer>
            <NavBar setIsLogin={setIsLogin} userInfo={userInfo}/>
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
                    <MenuBar userInfo={userInfo}/>
                </s.MainMenuContainer>
                <s.ContentContainer>
                    <Home userInfo={userInfo}/>
                    <Assistant userInfo={userInfo}/>
                </s.ContentContainer>
                <Info/>
            </s.Content>
        </s.MainContainer>
    )
}

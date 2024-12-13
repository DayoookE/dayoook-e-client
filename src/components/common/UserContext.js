import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// 유저 컨텍스트 생성
const UserContext = createContext();

// 유저 컨텍스트를 제공하는 프로바이더 컴포넌트
export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const token = localStorage.getItem('dayookeAccessToken');
                if (!token) {
                    setUserInfo(null);
                    return;
                }

                const response = await axios.get(
                    `${process.env.REACT_APP_SPRING_API_URL}/users/info`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );

                setUserInfo(response.data.result);
            } catch (error) {
                console.error('유저 정보 조회 실패:', error);
                setUserInfo(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, []);

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo, loading }}>
            {children}
        </UserContext.Provider>
    );
};

// 컨텍스트를 사용하는 헬퍼 훅
export const useUser = () => useContext(UserContext);

import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router'
import {MenuBar, NavBar} from '../../../components'
import StudyBottom from '../StudyBottom/StudyBottom'
import FairyReadContent from './FairyReadContent/FairyReadContent'
import {TitleIcon, PrevIcon} from '../../../assets/Study'
import * as s from './FairyRead.style'
import {useLocation} from "react-router-dom";
import axios from "axios";

export default function FairyRead({setIsLogin}) {
    const location = useLocation();
    const currentPath = location.pathname;

    const navigate = useNavigate()
    const [fontSize, setFontSize] = useState(2)

    const fairyTaleId = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    // 기본값을 1로 설정
    const [lastPageNumber] = useState(location.state?.lastPageNumber || 1)
    const [languageCode] = useState(location.state?.languageCode || 'ko')
    const [fairyTaleDetails, setFairyTaleDetails] = useState()

    const fetchFairyTaleDetails = async (page) => {
        const token = localStorage.getItem('dayookeAccessToken');
        const pageNumber = typeof page === 'number' ? page : lastPageNumber
        if (!token) {
            console.error('No access token found');
            return;
        }
        const response = await axios.get(
            `${process.env.REACT_APP_SPRING_API_URL}/storybooks/${fairyTaleId}?pageNumber=${pageNumber}`,
            {
                headers: {Authorization: `Bearer ${token}`},
            }
        );
        setFairyTaleDetails(response?.data?.result)
    }

    useEffect(() => {
        fetchFairyTaleDetails()
    }, [fairyTaleId, lastPageNumber])

    return (
        <s.StudyContainer>
            <NavBar setIsLogin={setIsLogin}/>
            <s.StudyContent>
                {/* 동화 페이지 메뉴바 */}
                <s.MainMenuContainer>
                    <s.StudyTitle>
                        <img src={PrevIcon} alt="prev" onClick={() => navigate('/study')}/>
                        <img src={TitleIcon} alt="title"/>
                        <div>{fairyTaleDetails?.title}</div>
                    </s.StudyTitle>
                    <MenuBar/>
                </s.MainMenuContainer>

                {/* 동화 콘텐츠 */}
                <FairyReadContent fontSize={fontSize}
                                  fairyTaleLanguageCode={languageCode}
                                  fetchFairyTaleDetails={fetchFairyTaleDetails}
                                  fairyTaleDetails={fairyTaleDetails}/>

                {/* 동화 페이지 아래 부분 */}
                <StudyBottom
                    type="read"
                    fontSize={fontSize}
                    setFontSize={setFontSize}
                />
            </s.StudyContent>
        </s.StudyContainer>
    )
}

import {useEffect, useState} from 'react'
import {MenuBar} from '../../../components'
import FairyList from '../FairyList/FairyList'
import StudyBottom from '../StudyBottom/StudyBottom'
import StudyOption from './StudyOption/StudyOption'
import {TitleIcon} from '../../../assets/Study'
import * as s from './StudyContent.style'
import axios from "axios";


export default function StudyContent({setPageState}) {
    const [nationSelect, setNationSelect] = useState(1)
    const [fairyTales, setFairytales] = useState()

    const fetchFairyTales = async (nationId) => {
        try {
            const token = localStorage.getItem('dayookeAccessToken');
            const countryId = typeof nationId === 'number' ? nationId : nationSelect
            if (!token) {
                console.error('No access token found');
                return;
            }

            const response = await axios.get(
                `${process.env.REACT_APP_SPRING_API_URL}/storybooks?countryId=${countryId}&page=1`,
                {
                    headers: {Authorization: `Bearer ${token}`},
                }
            );
            setFairytales(response?.data?.result?.content);
        } catch (error) {
            console.error('Failed to fetch fairy tales:', error);
        }
    }

    useEffect(() => {
        fetchFairyTales();
    }, [nationSelect])

    return (
        <s.StudyContentWrapper>
            {/* 학습 페이지 메뉴바 */}
            <s.MainMenuContainer>
                <s.StudyTitle>
                    <img src={TitleIcon} alt="title"/>
                    <div>다육이의 동화 세상</div>
                </s.StudyTitle>
                <MenuBar/>
            </s.MainMenuContainer>

            {/* 동화책 선택 옵션 */}
            <StudyOption
                nationSelect={nationSelect}
                setNationSelect={setNationSelect}
            />

            {/* 동화책 리스트 */}

            <FairyList setPageState={setPageState} nationSelect={nationSelect} fairyTales={fairyTales}
                       fetchFairyTales={fetchFairyTales}/>


            {/* 학습 페이지 아래 부분 */}
            <StudyBottom type="study"/>
        </s.StudyContentWrapper>
    )
}

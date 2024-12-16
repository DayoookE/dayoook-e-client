import {useNavigate} from 'react-router-dom'
import {useRef, useState} from 'react'
import ModalComponent from '../../../components/ModalComponent/ModalComponent'
import {MenuBar} from '../../../components'
import {SearchIcon} from '../../../assets/TutorPage'
import * as ms from '../../Main/Main.style'
import * as s from './TutorMenu.style'
import axios from "axios";

export default function TutorMenu({setIsRecommend, searchKeywordRef, handleSearch}) {
    const navigate = useNavigate()
    const [modalIsOpen, setIsOpen] = useState(false)

    const handleSubmit = () => {
        setIsOpen(false)
        setIsRecommend(true)
        navigate('/tutorlist')
    }

    return (
        <ms.MainMenuContainer>
            <s.MenuLeftContainer>
                <s.SearchContainer>
                    <s.SearchInput placeholder="튜터를 검색해보세요  🙌" ref={searchKeywordRef}/>
                    <s.SearchBtn src={SearchIcon} alt="Search" onClick={handleSearch}/>
                </s.SearchContainer>
                <ms.RecommendButton onClick={() => setIsOpen(true)}>
                    🌱 다육이에게 튜터 추천받기
                </ms.RecommendButton>
                <ModalComponent
                    handleSubmit={handleSubmit}
                    modalIsOpen={modalIsOpen}
                    setIsOpen={setIsOpen}
                />
            </s.MenuLeftContainer>
            <MenuBar/>
        </ms.MainMenuContainer>
    )
}

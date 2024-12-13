import {Link, useLocation, useNavigate} from 'react-router-dom'
import {
    ByeoljuImg,
    FairyImg,
    GyeonWooImg,
    HeungbuImg,
    SimcheongImg,
    HeartIcon,
    HeartWhite,
} from '../../../assets/FairyList'
import * as s from './FairyList.style'
import axios from "axios";

const genTitleColor = () => {
    const colors = [
        "#4EB1A6",
        "#4A84BD",
        "#31ADE7",
        "#EE696F",
        "#FC9230",
    ]
    const randomIdx = Math.floor(Math.random() * colors.length);
    return colors[randomIdx];
}

export default function FairyList({setPageState, nationSelect, fairyTales, fetchFairyTales}) {
    const navigate = useNavigate();
    const handleLikeToggle = async (storybookId) => {
        try {
            const token = localStorage.getItem('dayookeAccessToken');
            await axios.post(
                `${process.env.REACT_APP_SPRING_API_URL}/storybooks/${storybookId}/toggle-like`,
                {},  // empty body for POST request
                {
                    headers: {Authorization: `Bearer ${token}`},
                }
            );

            fetchFairyTales(nationSelect);
        } catch (error) {
            console.error('Failed to toggle like:', error);
        }
    };


    if (!fairyTales) {
        return <s.FairyListContainer>Loading...</s.FairyListContainer>;
    }

    return (
        <s.FairyListContainer>
            {fairyTales.map((fairy, index) => (
                    <s.BookItem key={fairy.id || index}>
                        {/* 동화 표지 */}
                        <s.FairyBookCover
                            onClick={() => navigate(
                                `/study/fairyread/${fairy.id}`, {
                                    state: {lastPageNumber: fairy.lastPageNumber}
                                }
                            )}
                            percent={((fairy.lastPageNumber - 0) / fairy.pageCount) * 100}>
                            <s.BookImgCover>
                                <img src={`${process.env.REACT_APP_S3_BUCKET}${fairy.thumbnailUrl}`} alt="img"/>
                            </s.BookImgCover>
                        </s.FairyBookCover>
                        {/* 동화 이름 */}
                        <s.BookInfoContainer titleColor={genTitleColor()}>
                            <div>{fairy.title}</div>
                            <img src={fairy.liked ? HeartIcon : HeartWhite}
                                 alt="heart"
                                 onClick={(e) => {
                                     e.preventDefault();  // 이벤트 버블링 방지
                                     handleLikeToggle(fairy.id);
                                 }}
                                 style={{cursor: 'pointer'}}  // 클릭 가능함을 표시
                            />
                        </s.BookInfoContainer>
                    </s.BookItem>
                )
            )
            }
        </s.FairyListContainer>
    )
}
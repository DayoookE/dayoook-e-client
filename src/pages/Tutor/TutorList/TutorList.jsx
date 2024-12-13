import TutorSelect from '../TutorSelect/TutorSelect'
import {DotIcon, StarIcon} from '../../../assets/icon'
import * as s from './TutorList.style'
import {forwardRef, useEffect, useRef, useState} from "react";
import axios from "axios";
import {TutorSchedule} from "./TutorList.style";

const getLanguage = (language) => {
    const languageMapping = {
        "대한민국": "🇰🇷",
        "중국": "🇨🇳",
        "베트남": "🇻🇳",
        "영어": "🇺🇸",
        "러시아": "🇷🇺",
        "필리핀": "🇵🇭",
    };
    return languageMapping[language] || "🇰🇷";
};

const getLevel = (level) => {
    const levelMapping = {
        "BEGINNER": "초급",
        "INTERMEDIATE": "중급",
        "ADVANCED": "고급"
    }
    return levelMapping[level] || "초급";
}


export default function TutorList({isRecommend, setIsRecommend, recommendTutors}) {
    const [tutors, setTutors] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const observerTarget = useRef(null);

    const fetchTutors = async () => {
        try {
            setLoading(true);

            if (isRecommend) {
                setTutors(recommendTutors);
                setHasMore(false);
            } else {
                const response = await axios.get(
                    `${process.env.REACT_APP_SPRING_API_URL}/tutors?page=${page}`,
                    {}
                );
                const newTutors = response?.data?.result?.content || [];
                setTutors(prev => (page === 1 ? newTutors : [...prev, ...newTutors]));
                setHasMore(!response?.data?.result?.last);
            }
        } catch (error) {
            console.error('Error fetching tutors:', error);
        } finally {
            setLoading(false);
        }
    };

    // IntersectionObserver callback
    const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMore && !loading) {
            setPage(prev => prev + 1);
        }
    };

    useEffect(() => {
        console.log("isRecommend update!")
        setTutors([]);
        setPage(1);
        setHasMore(!isRecommend);
        fetchTutors()
    }, [isRecommend]);

    useEffect(() => {
        fetchTutors();
    }, [page]);

    useEffect(() => {
        if (isRecommend) {
            return;
        }
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '20px',
            threshold: 0.1
        });

        const currentTarget = observerTarget.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.disconnect();
            }
        };
    }, [hasMore, loading, isRecommend]);
    return (
        <s.TutorListContentContainer>
            <TutorSelect isRecommend={isRecommend} setIsRecommend={setIsRecommend}/>
            <s.Cards>
                {tutors.map((tutor, idx) => {
                    const isLastElement = idx === tutors.length - 1;
                    return (
                        <Card
                            key={tutor.id || idx}
                            card={tutor}
                            ref={isLastElement ? observerTarget : null}
                        />
                    );
                })}
            </s.Cards>
            {loading && <div>Loading...</div>}
        </s.TutorListContentContainer>
    )
}

const Card = forwardRef(({card}, ref) => {
    return (
        <s.CardContainer ref={ref}>
            <s.CardTop>
                <div>
                    {Array.from({length: card.rating}, (_, idx) => (
                        <img key={idx} src={StarIcon} alt="star"/>
                    ))}
                </div>
                <img src={DotIcon} alt="dot"/>
            </s.CardTop>
            <s.TutorImg src={`${process.env.REACT_APP_S3_BUCKET}${card.profileUrl}`} alt="user"/>
            <s.TutorName>{card.name}</s.TutorName>

            <s.TutorLevel>
                <div>학습 난이도</div>
                <div>{getLevel(card.koreanLevel)}</div>
            </s.TutorLevel>
            <s.TuteeAge>
                <div>튜티 주 연령</div>
                <div>{card.ageGroups.map(age => age.name).join(', ')}</div>
            </s.TuteeAge>
            <s.TutorLang>{card.languages.map(lang => getLanguage(lang.name)).join('  ')}</s.TutorLang>
            <s.ApplyButton>튜티 신청하기</s.ApplyButton>
        </s.CardContainer>
    )

});
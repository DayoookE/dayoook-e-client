import { useState, useEffect } from 'react'
import axios from 'axios'
import { NextArrow, PrevArrow } from '../../../assets/MainPage'
import { Title } from '../Main.style'
import * as s from './Info.style'

export default function Info() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const token = localStorage.getItem('dayookeAccessToken');
        if (!token) {
          console.error('액세스 토큰이 없습니다.');
          return;
        }

        const response = await axios.get(`${process.env.REACT_APP_FAST_API_URL}/welfare/info`, {
          params: { page: 1 },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setNews(response.data);
      } catch (error) {
        console.error('복지 정보 조회 실패:', error);
        setError(error.response?.data);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // 에러 처리 로직 추가
  if (error && error.dmMessage && error.dmMessage.status === "ERROR") {
    window.location.href = "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52005M.do";
    return null;
  }

  if (loading) return <div>로딩 중...</div>;

  return (
      <s.InfoContainer>
        <Title>새로운 소식</Title>
        <s.SliderWrapper>
          <s.StyledSlider {...settings}>
            {news.map((item, index) => (
                <SliderItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    startDate={item.start_date}
                    endDate={item.end_date}
                    organization={item.organization}
                    tag={item.status || '정보'}
                    link={item.detail_url}
                />
            ))}
          </s.StyledSlider>
        </s.SliderWrapper>
      </s.InfoContainer>
  );
}

const SliderItem = ({ title, startDate, endDate, tag, organization, link }) => {
  const formatDate = (date) => {
    if (!date || date === "19700101") return "미정"; // 처리되지 않은 날짜 처리
    return `${date.slice(0, 4)}년 ${date.slice(4, 6)}월 ${date.slice(6)}일`;
  };

  const startDateFormat = formatDate(startDate);
  const endDateFormat = formatDate(endDate);

  return (
      <s.SliderItemContainer>
        <div style={{ margin: '1em' }}>
          <s.ItemTag>{tag}</s.ItemTag>
          <s.ItemTitle>{title}</s.ItemTitle>
          <ItemDetail title="주관기관" content={organization} />
          <ItemDetail title="모집 시작일" content={startDateFormat} />
          <ItemDetail title="모집 마감일" content={endDateFormat} />
          <s.DetailLink href={link} target="_blank" rel="noopener noreferrer">
            자세히 보기
          </s.DetailLink>
        </div>
      </s.SliderItemContainer>
  );
};

const ItemDetail = ({ title, content }) => (
    <s.ItemDetailContainer>
      <div>{title}</div>
      <div>{content}</div>
    </s.ItemDetailContainer>
);

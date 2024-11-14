import { NextArrow, PrevArrow } from '../../../assets/MainPage'
import { Title } from '../Main.style'
import * as s from './Info.style'

export default function Info() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

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
              startDate={item.startDate}
              endDate={item.endDate}
              organization={item.organization}
              tag={item.tag}
              link={item.link}
            />
          ))}
        </s.StyledSlider>
      </s.SliderWrapper>
    </s.InfoContainer>
  )
}

const SliderItem = ({ key, title, startDate, endDate, tag, organization }) => {
  const startDateFormat = `${startDate.slice(0, 4)}년 ${startDate.slice(
    4,
    6
  )}월 ${startDate.slice(6)}일`
  const endDateFormat = `${endDate.slice(0, 4)}년 ${endDate.slice(
    4,
    6
  )}월 ${endDate.slice(6)}일`

  return (
    <s.SliderItemContainer>
      <div style={{ margin: '1em' }}>
        <s.ItemTag key={key}>{tag}</s.ItemTag>
        <s.ItemTitle>{title}</s.ItemTitle>
        <ItemDetail title="주관기관" content={organization} />
        <ItemDetail title="모집 시작일" content={startDateFormat} />
        <ItemDetail title="모집 마감일" content={endDateFormat} />
      </div>
    </s.SliderItemContainer>
  )
}

const ItemDetail = ({ title, content }) => {
  return (
    <s.ItemDetailContainer type={title}>
      <div>{title}</div>
      <div>{content}</div>
    </s.ItemDetailContainer>
  )
}

const news = [
  {
    title: '당진형 에너지 바우처 사업',
    content:
      '2021년 당진시 주거실태조사 및 주거복지기본계획 수립 결과 시민들의 에너지바우처에 대한 주거복지 요구 파악으로 취약계층 난방비 지원',
    startDate: '20230101',
    endDate: '20250101',
    organization: '충청남도 당진시 건설도시국 주택개발과',
    tag: '생활안정지원',
    link: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00005059&wlfareInfoReldBztpCd=01',
  },
  {
    title: '방과후학교 자유수강권',
    content:
      '방과후학교 수업을 통해 저소득층 자녀의 지속적이며 실직적인 교육기회를 확대하고 공교육 활성화 및 저소득층의 교육격차 해소를 돕습니다.',
    startDate: '20240101',
    endDate: '20250101',
    organization: '교육부 방과후돌봄정책과',
    tag: '교육',
    link: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000867&wlfareInfoReldBztpCd=01',
  },
  {
    title: '아이돌봄 서비스',
    content:
      '맞벌이를 하거나 갑자기 아이를 돌볼 수 없는 일이 생겼을 때 육아 도우미가 방문하여 12세 이하 자녀의 양육을 도와줍니다.',
    startDate: '20240301',
    endDate: '20250101',
    organization: '여성가족부 가족문화과',
    tag: '아동',
    link: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000024&wlfareInfoReldBztpCd=01',
  },
  {
    title: '[밀알복지재단] 국내지원사업',
    content:
      '경제적 어려움으로 수술 및 치료를 받을 수 없는 장애인 가정과 긴급한 위기상황에 놓인 저소득 가정이 위기를 극복하고 자립할 수 있도록 지원합니다.',
    startDate: '20240902',
    endDate: '20241231',
    organization: '사회복지법인 밀알복지재단',
    tag: '지원',
    link: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=BOK00000912&wlfareInfoReldBztpCd=01',
  },
  {
    title: '2024년 2학기 준제장학회 희망나무장학생 모집 공고',
    content:
      '경제적인 어려움을 겪고 있는 희귀난치성질환 청소년 환우에게 치유 및 재활을 위한 생활비용이나 교육에 필요한 장학금을 지급합니다.',
    startDate: '20240909',
    endDate: '20241004',
    organization: '준제장학회',
    tag: '장학금',
    link: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=BOK00000914&wlfareInfoReldBztpCd=01',
  },
  {
    title: '다문화보육료지원',
    content:
      '어린이집을 이용하는 다문화 가정의 영유아 자녀에게 보육료를 지원하여 부모의 양육에 대한 부담을 덜고, 부모가 원활한 경제활동을 할 수 있도록 돕습니다.',
    startDate: '20220101',
    endDate: '20240101',
    organization: '교육부 영유아재정과',
    tag: '보육료',
    link: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001183&wlfareInfoReldBztpCd=01',
  },
]

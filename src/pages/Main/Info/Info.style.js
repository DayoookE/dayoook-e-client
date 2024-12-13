import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const ItemDetailContainer = styled.div`
  display: flex;
  margin-bottom: 0.5em !important;

  & > div:first-child {
    color: ${(props) =>
      props.type === '모집 시작일'
        ? '#539955'
        : props.type === '모집 마감일'
        ? '#FF6161'
        : '#539955'};

    font-weight: bold;
    margin-right: 0.5em;
    min-width: 4.6em;
    text-align: left;
    font-size: 0.9em;
  }

  & > div:last-child {
    color: #5c5c5c;
    font-size: 0.9em;
  }
`
export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 0em !important;
`
export const SliderWrapper = styled.div`
  width: 100%;
  height: 0;
  flex: 1;
  display: flex;
  justify-content: center;
`
export const StyledSlider = styled(Slider)`
  height: 100%;
  width: calc(100vw - 7em - 220px);
  min-width: 37em;

  .slick-prev {
    width: 50px;
    height: 100%;
    z-index: 1;
    left: -60px;
  }
  .slick-next {
    width: 50px;
    height: 100%;
    z-index: 1;
    right: -60px;
  }
  .slick-prev,
  .slick-next {
    height: 50px;
    border-radius: 100%;

    &:hover {
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
  }

  .slick-list,
  .slick-track,
  .slick-slide.slick-active.slick-current {
    height: 100% !important;
  }

  .slick-slide > div {
    height: 100%;
    overflow-y: auto;
  }
`
export const SliderItemContainer = styled.div`
  background: #fff;
  border-radius: 15px;
  margin: 0 0.7em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  height: calc(100% - 1em);
  overflow-y: auto;
  margin-top: 0.2em;

  &:hover {
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.25);
  }
`
export const ItemTitle = styled.div`
  font-weight: bold;
  margin: 0.7em 0 0.6em 0 !important;
  font-size: 1.3em;
`
export const ItemTag = styled.div`
  background-color: #5eb561;
  color: #fff;
  border-radius: 10px;
  padding: 0.2em 0.5em;
  margin-bottom: 0.5em;
  width: fit-content;
  font-weight: bold;
`

export const DetailLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
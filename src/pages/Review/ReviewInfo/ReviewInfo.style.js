import styled, { keyframes } from 'styled-components'
import { CheerBackgroundImg } from '../../../assets/Mypage/Review'

export const stripeAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 0;
  }
`

export const ProgressBarContainer = styled.div`
  height: 1.8em;
  margin: 0.5em -0.7em 0.3em -0.7em;
  background-color: #e0e0e0;
  border-radius: 1em;
  overflow: hidden;
  position: relative;
`

export const Progress = styled.div`
  border-radius: 1em;
  height: 100%;
  width: ${({ progress }) => `${progress}%`};
  background: #ffd400;
  background-size: 40px 40px;
  animation: ${stripeAnimation} 2s linear infinite;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.4) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0.4) 75%,
    transparent 75%,
    transparent
  );
  background-size: 20px 20px;
`

export const FixedCircle = styled.div`
  width: 20px;
  height: 20px;
  background-color: #fff9dc;
  border: none;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 0.5em;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  color: white;
`

export const ContentWrapper = styled.div`
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.25);
  border-radius: 1em;
  background-color: #fff;
  padding: 1.1em 1.5em 0.7em 1.5em;
  margin-bottom: 1em;
`

export const TitleContainer = styled(ContentWrapper)`
  height: 3.4em;
  display: flex;
  align-items: center;

  div:first-child {
    div:first-child {
      font-size: 1.5em;
      font-weight: 700;
      margin-bottom: 0.1em;
    }
    div:last-child {
      font-size: 1.1em;
      font-weight: 700;
    }
  }

  img {
    cursor: pointer;
    margin-left: auto;
    width: 1.8em;
    height: 1.8em;

    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`

export const PointContainer = styled(ContentWrapper)`
  padding-top: 1.5em;

  .stripe {
    background: repeating-linear-gradient(
      45deg,
      #3fc3b8,
      #3fc3b8 10px,
      #fff 10px,
      #fff 20px
    );
  }
`

export const PointContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 5em;
    height: 5em;
  }
`

export const PointText = styled.div`
  text-align: end;
  div {
    font-size: 1.2em;
    font-weight: 900;
  }
  div:last-child {
    font-size: 2.4em;
    font-weight: 700;
  }
`

export const CheerContainer = styled(ContentWrapper)`
  flex: 1;
  background-image: url(${CheerBackgroundImg});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  margin-bottom: 0;

  div {
    font-size: 1.8em;
    font-weight: 900;
    padding: 1em 0;
  }
`

export const ReviewInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 18em;
  height: 100%;
  margin-right: 1em;
`

export const EmptyContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.4em;
  font-weight: bold;
`

export const ReviewList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  border-bottom: 1px solid #f1f1f1;
  align-items: center;

  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
  &:active {
    background-color: #e1e1e1;
  }

  &:last-child {
    border-bottom: none;
  }

  div:first-child {
    font-size: 1.1em;
    font-weight: 700;
  }
  div:last-child {
    font-size: 0.9em;
  }
`

export const ReviewListPosition = styled.div`
  position: relative;
  background-color: white;
  z-index: 999;
`

export const ReviewListContainer = styled.div`
  position: absolute;
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.5);
  width: 100%;
  border-radius: 1em;
  margin-top: -0.7em;
  background-color: white;
  height: 11em;
  min-height: 11em;
  max-height: 11em;
  overflow: auto;
`

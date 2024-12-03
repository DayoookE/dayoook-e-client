import styled from 'styled-components'
import { ProfileBackgroundImg } from '../../../assets/Mypage'

export const ProfileWrapper = styled.div`
  background-image: url(${ProfileBackgroundImg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  align-content: center;
  height: 11em;
  margin-top: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 8em;
    height: 8em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10em;
    height: 10em;
  }
`

export const MypageBtn = styled.div`
  background-color: ${(props) => (props.mypage ? '#89CE88' : '#fff')};
  color: ${(props) => (props.mypage ? '#fff' : '#65AF67')};
  width: 8.5em;
  height: 8.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 1em;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  cursor: ${(props) => (props.mypage ? 'pointer' : 'not-allowed')};

  img {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
`

export const MypageBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DetailInfoWrapper = styled.div`
  flex: 1;
`

export const DetailInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${(props) => (props.tutor ? '0.5em' : '1.5em')};
  padding: 0 2em;

  img {
    width: 2.5em;
    height: 2.5em;
    margin-right: 1em;
  }

  div {
    font-size: 1.2em;
    padding-top: ${(props) => (props.tutor ? '0.5em' : '0')};
  }
`

export const MyName = styled.div`
  font-size: 1.7em !important;
  font-weight: 900;
  margin-bottom: 0.1em;
`

export const MyInfoNameWrapper = styled.div`
  display: flex;
  align-self: center;
  align-items: center;

  img {
    width: 3.5em;
    height: 3.5em;
    margin-right: 0.5em;
  }

  div {
    font-size: 1.1em;
  }
`

export const MyInfoTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 3em;
    height: 3em;
    cursor: pointer;

    &:hover {
      transform: rotate(20deg) scale(1.1);
      transition: transform 0.5s;
    }
  }
`

export const MyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 24em;
  background-color: #ebf5e8;
  margin-left: auto;
  padding: 2.8em 1.8em 1.8em 1.5em;
`

export const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
`

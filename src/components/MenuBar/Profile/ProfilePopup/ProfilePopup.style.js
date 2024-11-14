import styled from 'styled-components'

export const PopupContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  width: 6.3em;
  padding: 0.3em 0 0.2em 0;
  border-right: ${(props) => (props.center ? '1px solid gray' : 'none')};
  border-left: ${(props) => (props.center ? '1px solid gray' : 'none')};
  padding-right: ${(props) =>
    props.first ? '0.5em' : props.center ? '1em' : '0'};
  padding-left: ${(props) =>
    props.first ? '0em' : props.center ? '1em' : '0.5em'};
  div {
    font-weight: 700;
    font-size: 0.9em;
    cursor: pointer;
  }
  img {
    margin-top: 0.5em;
    width: 3em;
    height: 3em;
    cursor: pointer;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
  justify-content: space-around;
`
export const PopupContent = styled.div`
  display: flex;
`
export const PopupUserName = styled.div`
  display: flex;
  align-items: end;
  font-weight: bold;
  font-size: 1.5em;
  cursor: default;
  margin: 0.1em 0;
  img {
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.5em;
    margin-left: -0.5em;
  }
`
export const PopupTopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5em;
  img {
    width: 2.5em;
    height: 2.5em;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`
export const PopupUserImg = styled.img`
  width: 7em;
  height: 7em;
  margin-top: -2em;
  cursor: default;
`
export const ProfilePopupContainer = styled.div`
  position: absolute;
  top: 2.9em;
  right: -1em;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  padding: 0.7em 1.2em 1.2em 1.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  cursor: default;
  display: none;
`

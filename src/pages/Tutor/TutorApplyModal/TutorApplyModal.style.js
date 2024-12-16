import styled from 'styled-components'

export const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    border: 'none',
    padding: '2.5em 3em 3em 3em',
    width: '25%',
    height: '50%',
    maxWidth: '70%',
    width: 'fit-width',
    minWidth: '40%',
    height: 'fit-content',
    boxSizing: 'border-box',
    overflow: 'auto',
  },
}

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  margin-left: -0.5em;
  margin-right: -0.5em;

  div {
    width: 50%;
    padding: 0.7em 0;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;

    font-size: 1.4em;
    font-weight: bold;
  }
  div:first-child {
    background-color: #ff9797;
    margin-right: 1em;
    color: #fff;

    &:hover {
      background-color: #ff7f7f;
    }
    &:active {
      background-color: #ff6b6b;
    }
  }
  div:last-child {
    background-color: #89ce88;
    margin-left: 1em;
    color: #fff;

    &:hover {
      background-color: #6dbf6d;
    }
    &:active {
      background-color: #5db05d;
    }
  }
`

export const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    font-size: 1.5em;
    font-weight: bold;
  }

  img {
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(1);
    }
  }
`

export const ApplyTextArea = styled.textarea`
  width: 100%;
  height: 3em;
  border: none;
  background-color: #fff9c4;
  resize: none;
  border-radius: 10px;
  color: #525252;
  padding: 1em;
  margin-left: -1em;
  margin-top: 1em;
  font-size: 1.2em;

  &:focus {
    outline: none;
  }
`

export const TimeItem = styled.div`
  align-content: center;
  padding: 0.7em 0.5em;
  border-radius: 10px;
  cursor: ${(props) => (props.isAvailable ? 'pointer' : 'not-allowed')};
  font-weight: bold;
  text-align: center;
  background-color: ${(props) =>
    props.isSelect ? '#89ce88' : props.isAvailable ? '#fff' : '#f0f0f0'};
  color: ${(props) =>
    props.isSelect ? '#fff' : props.isAvailable ? '#525252' : '#b0b0b0'};
  box-shadow: ${(props) =>
    props.isAvailable && !props.isSelect ? 'inset 0 0 0 2px #f0f0f0' : 'none'};
  &:hover {
    background-color: ${(props) => (props.isAvailable ? '#def8de' : '#f0f0f0')};
    box-shadow: ${(props) =>
      props.isAvailable ? 'inset 0 0 0 2px #def8de' : 'none'};
  }
  &:active {
    background-color: ${(props) => (props.isAvailable ? '#c7f0c7' : '#e0e0e0')};
    box-shadow: ${(props) =>
      props.isAvailable ? 'inset 0 0 0 2px #c7f0c7' : 'none'};
  }
`

export const TimeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5em;
`

export const DayItem = styled.div`
  padding: 0.5em 0.5em;
  border-radius: 10px;
  font-size: 1.1em;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  background-color: ${(props) => (props.isSelect ? '#ff9797' : '#fff')};
  color: ${(props) => (props.isSelect ? '#fff' : '#525252')};

  &:hover {
    background-color: ${(props) => (props.isSelect ? '#ff7f7f' : '#f0f0f0')};
  }
  &:active {
    background-color: ${(props) => (props.isSelect ? '#ff6b6b' : '#e0e0e0')};
  }
`

export const DayWrapper = styled.div`
  display: flex;
  gap: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`

export const DaySelectWrapper = styled.div``

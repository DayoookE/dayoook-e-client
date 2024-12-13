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
    maxWidth: '50%',
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
  height: 100px;
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

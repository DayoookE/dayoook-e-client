import styled from 'styled-components'

export const OptionTitle = styled.div`
  margin: 0.8em 0 1em 0;
  font-weight: bold;
  font-size: 1.5em;
`

export const RadioInputContainer = styled.div`
  margin-bottom: 1.7em;
  font-weight: 600;

  input[type='radio'],
  input[type='checkbox'] {
    display: none;
  }

  input[type='radio'] + label,
  input[type='checkbox'] + label {
    border-radius: 50px;
    padding: 0.5em 1em;
    cursor: pointer;
    box-shadow: 0px 1px 1.5px 1px #e8e8e8;
  }

  input[type='radio']:checked + label,
  input[type='checkbox']:checked + label {
    background-color: #ffed93;
  }

  input[type='radio'] + label,
  input[type='checkbox'] + label {
    margin-right: 0.5em;
  }

  input[type='radio'] + label:last-child,
  input[type='checkbox'] + label:last-child {
    margin-right: 0;
  }

  input[type='radio'] + label:hover,
  input[type='checkbox'] + label:hover {
    background-color: #fffadf;
    box-shadow: 0px 1px 1.5px 1px #e8e8e8;
  }

  input[type='radio']:checked + label:hover,
  input[type='checkbox']:checked + label:hover {
    background-color: #ffed93;
  }

  input[type='radio'] + label:active,
  input[type='checkbox'] + label:active {
    background-color: #ffed93;
    box-shadow: 0px 0.5px 1.5px 1px #e8e8e8;
  }
`

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin: 0 -1em;
  margin-top: 3em;
`

export const ModalButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 2px solid #5eb561;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  color: #5eb561;
  width: 7em;
  height: 3em;
  padding: 0 1em;

  &:hover {
    background-color: #5eb561;
    color: #fff;

    img {
      filter: brightness(0) invert(1);
    }
  }

  &:active {
    background-color: #4d9b4f;
    color: #fff;
    border-color: #4d9b4f;

    img {
      filter: brightness(0) invert(1);
    }
  }

  &:disabled {
    background-color: #e8e8e8;
    border-color: #e8e8e8;
    cursor: not-allowed;
    color: gray;

    img {
      filter: grayscale(100%);
    }
  }

  img {
    width: 1em;
    height: 1em;
  }

  div {
    font-size: 1.2em;
    margin: 0 auto;
    margin-bottom: -0.1em;
  }
`

export const ProgressContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  background-color: pink;
  border-radius: 10px;
`

export const ProgressBar = styled.progress`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  appearance: none;

  &::-webkit-progress-bar {
    background-color: #e8e8e8;
    border-radius: 10px;
  }

  &::-webkit-progress-value {
    background-color: #5eb561;
    border-radius: 10px;
  }

  &::-moz-progress-bar {
    background-color: #5eb561;
    border-radius: 10px;
  }
`

export const ImageOverlay = styled.img`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
  height: 3em;
`

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;

  div {
    font-size: 1.2em;
    font-weight: bold;
    margin: 0 auto;
    padding-left: 2em;
  }

  img {
    width: 2em;
    height: 2em;
    cursor: pointer;
  }
`

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
    width: '50%',
    height: '50%',
    maxWidth: '50%',
    minWidth: 'max-content',
    maxHeight: '500%',
    minHeight: 'max-content',
    boxSizing: 'border-box',
  },
}

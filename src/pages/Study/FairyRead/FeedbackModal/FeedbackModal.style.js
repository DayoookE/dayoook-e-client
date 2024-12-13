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
    padding: '2.5em 3em 1em 3em',
    width: '25%',
    height: '50%',
    maxWidth: '50%',
    width: 'fit-width',
    minWidth: '40%',
    minHeight: '60%',
    maxHeight: '60%',
    boxSizing: 'border-box',
    overflow: 'auto',
  },
}

export const XContainer = styled.div`
  display: flex;
  margin-bottom: 1em;

  div {
    flex: 1;
    font-size: 1.8em;
    font-weight: bold;
    // 부모 div 에서 가운데 정렬
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1em;
    color: #f08787;
  }

  img {
    margin-left: auto;
    cursor: pointer;
    &:hover {
      filter: brightness(0.8);
    }
  }
`

export const ModalComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const FeedBackText = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  line-height: 1.8em;
`

export const DayookImg = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    height: 100%;
    width: auto;
    margin-left: auto;
    margin-top: -5em;
    margin-right: -2em;
    z-index: -1;
    opacity: 0.7;
  }
`

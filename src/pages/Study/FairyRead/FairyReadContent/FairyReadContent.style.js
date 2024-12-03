import styled from 'styled-components'

export const ReadBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(145deg, #ffeb89, #abf2ad);
  border-radius: 100em;
  height: 3em;
  width: 24em;
  max-width: calc(100% - 7em);
  margin-top: 0.8em;

  font-size: 1.2em;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2.5px 4px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`

export const BookText = styled.div`
  font-size: ${(props) => props.fontSize}em;
  font-weight: bold;
`

export const BookTextWrapper = styled.div`
  position: absolute;
  bottom: 2em;
  left: 3em;
`

export const BookContentContainer = styled.div`
  flex: 1 1 0;
  overflow: hidden;
  background: rgba(82, 82, 82, 0.1);
  border-radius: 30px;
  box-shadow: 0 2.5px 4px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    cursor: pointer;
    transition: opacity 0.1s ease;
    opacity: 1;

    &.fade-out {
      opacity: 0;
    }

    &.fade-in {
      opacity: 1;
    }
  }
`

export const TranslationContainer = styled.div`
  background-color: #737779;
  margin: 0.5em 0;
  border-radius: 20px;
  color: #fff;
  padding: 0 1em;
  font-size: 1.5em;
  font-weight: 600;
  height: 2.2em;
  align-content: center;
  overflow: auto;
`

export const ReadContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

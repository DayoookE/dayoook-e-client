import styled from 'styled-components'
import { MainBackground } from '../../../assets/MainPage'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.5em;
  width: 54%;
`
export const EnterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.7em;
  width: max-content;
  img {
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.8em;
    cursor: pointer;
  }
  div {
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
  }
  &:hover {
    color: #539955;
  }
`
export const HomeContent = styled.div`
  background-color: #fff;
  flex: 1;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 2em;
  padding-top: 1.8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${MainBackground});
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: auto;
`
export const HomeTitle = styled.div`
  font-size: 2.2em;
  font-weight: bold;
  margin-bottom: 0.5em;
`
export const HomeSubtitle = styled.div`
  font-size: 1.2em;
`

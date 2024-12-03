import styled from 'styled-components'

export const TutorImg = styled.img`
  width: 6em;
  height: 6em;
  margin: 0.5em 0;
  border-radius: 100%;
`

export const TutorLang = styled.div`
  font-size: 1.8em;
  margin: 0.1em 0 0.2em 0;
`

export const TutorName = styled.div`
  font-size: 1.3em;
  font-weight: 700;
  margin-bottom: 0.2em;
`

export const TuteeAge = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  font-size: 0.8em;
  div:nth-child(1) {
    font-weight: 700;
  }
  div:nth-child(2) {
    font-weight: 500;
  }
`

export const ApplyButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3faf3;
  color: #539955;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  border-radius: 0 0 15px 15px;
  padding: 0.7em 0;
  border-top: 1px solid #a3c9a4;
`

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 1.5em);
  margin-right: -0.5em;
  margin-top: 1em;

  img {
    width: 1.2em;
    height: 1.2em;
  }
`

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1em;
  margin-top: 0.5em;
  flex: 1 1 0;
  overflow: visible;
  overflow-y: auto;

  width: calc(100% - 1.4em);
  padding: 0.2em 1.15em 0.3em 0.15em;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  width: 10em;
  height: calc(50% - 1.35em);
  font-weight: bold;
  cursor: pointer;

  flex: 0 0 calc(33.333% - 1.5em);
  max-width: calc(33.333% - 1.5em);
  width: 100%;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    background-color: #f8fff8;
    //transform: scale(1.02);
  }
  &:active {
    //transform: scale(1);
  }

  @media (min-width: 1440px) {
    flex: 0 0 calc(25% - 1.5em);
    max-width: calc(25% - 1.5em);
  }

  @media (max-width: 1200px) {
    flex: 0 0 calc(50% - 1.5em);
    max-width: calc(50% - 1.5em);
  }

  @media (max-width: 900px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  min-height: fit-content;
`

export const TutorListContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: calc(100% - 21em);
  width: calc(100% - 21em);
`

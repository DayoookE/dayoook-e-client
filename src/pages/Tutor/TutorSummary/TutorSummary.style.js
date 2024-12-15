import styled from 'styled-components'

export const SummaryImg = styled.img`
  width: 7.7em;
  height: 7.7em;
  border-radius: 15px 0 15px 0;
`

export const SummaryTitle = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: column;
  place-content: flex-end;

  div:nth-child(1) {
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 0.2em;
  }
`

export const SummaryDetail = styled.div`
  display: flex;
  margin: 1em 0;

  div:nth-child(1) {
    font-weight: 700;
    max-width: 4.9em;
    min-width: 4.9em;
    margin-right: 1em;
    text-align: right;
  }

  div:nth-child(2) {
    color: ${(props) => (props.career ? '#539955' : '#525252')};
    font-weight: ${(props) => (props.career ? 700 : 400)};
    line-height: 1.4em;
    font-size: ${(props) => (props.lang ? '1.5em' : '0.9em')};
    margin-top: ${(props) => (props.lang ? '-0.3em' : '-0.1em;')};
    word-break: auto-phrase;
  }
`

export const CareerWrapper = styled.div`
  color: #539955 !important;
  font-weight: 700 !important;
  line-height: 1.6em !important;
  font-size: 1em !important;
  margin-top: -0.1em !important;
  word-break: auto-phrase;

  font-weight: 700;
  max-width: fit-content !important;
  min-width: fit-content !important;
  margin-right: 0em !important;
  text-align: left !important;
`

export const SummaryProfile = styled.div`
  display: flex;
`

export const SummaryContent = styled.div`
  flex: 1 1 0;
  padding: 0 1em;
  overflow-y: auto;
`

export const SummaryApplyButton = styled.div`
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

export const TutorSummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  width: 100%;
  flex: 1;
`

export const TutorSummaryContainer = styled.div`
  width: 21em;
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.3em;
`

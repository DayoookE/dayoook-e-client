import styled from 'styled-components'

export const ReviewContentWrapper = styled.div`
  flex: 1 1 0;
  white-space: pre-wrap;
  overflow-y: auto;
  padding: 1em 0.5em;
`

export const ReviewContentTitle = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0 -0.3em;
  margin-bottom: 0.4em;
  border-radius: 0.5em;
  background-color: #fffade;
  padding: 0.4em 0.7em 0.3em 0.7em;
`

export const ReviewDescription = styled.div`
  font-size: 1.2em;
  line-height: 1.8;
  font-weight: bold;
  margin-bottom: 0.8em;
  padding: 0 0.4em;
`

export const ReviewContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const ReviewTitle = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0.3em 0;
  border-bottom: 1px solid #cce2cd;

  img {
    width: 2em;
    height: 2em;
    margin-right: 0.3em;
  }
  div {
    margin-top: 0.1em;
  }
`

export const ReviewButton = styled.button`
  background-color: #f8f8f8;
  border: none;
  border-radius: 0.4em;
  padding: 0.6em 1em 0.5em 1em;
  cursor: pointer;
  font-size: 1.5em;
  font-weight: bold;
  height: 2.3em;

  background-color: ${(props) => (props.active ? '#5eb561' : '#f8f8f8')};
  color: ${(props) => (props.active ? '#fff' : '#D9D9D9')};
`

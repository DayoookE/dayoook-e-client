import styled from 'styled-components'

export const ChatItemText = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10em 10em 10em 3em;
  padding: 0.8em 0.2em 0.6em 1.1em;
  background-color: #fffef8;

  div {
    font-size: 1.3em;
    font-weight: bold;
  }

  img {
    width: 2.4em !important;
    height: 2.4em !important;
    margin-left: 0.5em;
    visibility: visible !important;
    cursor: pointer;
  }
`

export const ChatItemUser = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10em 10em 3em 10em;
  padding: 0.9em 1.1em 0.7em 0.2em;
  background-color: #fffef8;
  width: max-content;
  margin-left: auto;
  font-size: 1.3em;
  font-weight: bold;

  div {
    margin-left: 0.9em;
  }
`

export const ChatItemBot = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 4.4em;
    height: 4.4em;
    margin-right: 0.7em;
    visibility: ${(props) => (props.imgVisible ? 'visible' : 'hidden')};
  }
`

export const ChatListContainer = styled.div`
  flex: 1 1 0;
  white-space: pre-wrap;
  overflow-y: auto;
  padding: 1.5em 1.5em 1em 1.5em;
  margin: 0 -1.5em;
`

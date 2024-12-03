import styled from 'styled-components'

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.1);
  background: linear-gradient(
    160deg,
    rgba(255, 235, 137, 1),
    rgba(215, 237, 216, 1)
  );
  margin: 0em -1.5em -0.7em -1.5em;
  padding: 0em 1.5em 0.7em 1.5em;
  border-radius: 3em 3em 0 0;
`

export const ChatTitle = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0.3em 0;

  img {
    width: 2em;
    height: 2em;
    margin-right: 0.3em;
  }
  div {
    margin-top: 0.1em;
  }
`

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

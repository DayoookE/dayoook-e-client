import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100dvh - 2.8em);
  min-height: fit-content;
  width: calc(100dvw - 4em);
  min-height: calc(100dvh - 2.8em);
  min-width: calc(100dvw - 2.4em);
  background-color: #fffef8;
  padding: 1.4em 1.2em;

  min-width: max-content;
  min-height: max-content;
`
export const MainMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const RecommendButton = styled.button`
  border: none;
  border-radius: 10em;
  background-color: #ffeb89;
  font-size: 1.1em;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  padding: 0.9em 1.2em 0.8em 1.2em;
  height: 3em;
  color: #525252;
  &:hover {
    background-color: #ffe066;
  }
  &:active {
    background-color: #ffd633;
  }
`
export const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.3em;
`
export const ContentContainer = styled.div`
  display: flex;
  height: 48%;
  width: 100%;
  margin: 1.5em 0;
`
export const Content = styled.div`
  flex: 1;
  height: calc(100% - 2em);
  margin: 0 1.5em;
  display: flex;
  flex-direction: column;
`

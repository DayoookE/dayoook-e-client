import styled from 'styled-components'

export const ContentContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin-top: 0.5em;
`

export const ReviewWrapper = styled.div`
  display: flex;
  width: 100dvw;
  height: 100dvh;
`

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

export const ReviewContainer = styled.div`
  flex: 1;
  height: calc(100% - 1em);
  margin: 0 1.5em;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`

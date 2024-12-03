import styled from 'styled-components'

export const MainMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const StudyContent = styled.div`
  flex: 1;
  height: calc(100% - 0.5em);
  padding-top: 0.5em;
  margin: 0 1.5em;
  display: flex;
  flex-direction: column;
  width: calc(100% - 10em);
`

export const StudyContainer = styled.div`
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

  min-width: fix-content;
  min-height: fix-content;
  background: linear-gradient(
    to bottom,
    rgba(255, 141, 157, 0.6),
    rgba(125, 226, 255, 0.2)
  );
`

export const StudyTitle = styled.div`
  font-size: 2.4em;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #fff;
  font-family: 'SDSamliphopangche_Basic', sans-serif;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  img {
    margin-right: 0.5em;

    &:first-child {
      box-shadow: 2px 2.5px 4px 1px rgba(0, 0, 0, 0.25);
      border-radius: 100%;
      cursor: pointer;

      &:hover {
        box-shadow: 2px 2.5px 4px 1px rgba(0, 0, 0, 0.3);
      }
    }
  }
`

import styled from 'styled-components'

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
  }
`

export const MainMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const StudyContentWrapper = styled.div`
  flex: 1;
  height: calc(100% - 1em);
  padding-top: 1em;
  margin: 0 1.5em;
  display: flex;
  flex-direction: column;
  width: calc(100% - 10em);
`

import styled from 'styled-components'

export const ReviewMenuContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 2.5em;
    height: 2.5em;
    margin-right: 1.5em;
    border-radius: 50%;
    box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const MainMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Title = styled.div`
  font-size: 1.8em;
  font-weight: bold;
`

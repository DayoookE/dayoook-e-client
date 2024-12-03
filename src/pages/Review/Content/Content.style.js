import styled from 'styled-components'

export const ReviewContentContainer = styled.div`
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.25);
  border-radius: 1em;
  background-color: #fff;
  padding: 1.1em 1.5em 0.7em 1.5em;
  margin-top: 1em;

  display: flex;
  flex-direction: column;
  flex: 1;

  overflow: hidden;
`

export const ButtonContainer = styled.div`
  height: 3.4em;
  background-color: #fff;
  border-radius: 50em;
  align-content: center;
  font-size: 1.5em;
  font-weight: 700;
  width: 9em;
  justify-items: center;
  margin-left: 0.5em;
  cursor: pointer;
  color: #fff;

  background: ${({ review }) =>
    review
      ? 'rgba(215, 237, 216, 1)'
      : 'linear-gradient(145deg, rgba(255, 235, 137, 1), rgba(215, 237, 216, 1))'};
  box-shadow: inset 0 -4px 3px 1px rgba(0, 0, 0, 0.25);

  &:hover {
    background: ${({ review }) =>
      review ? '#5EB561' : 'rgba(255, 212, 0, 0.5)'};
    color: #fff;
    box-shadow: inset 0 -2px 3px 1px rgba(0, 0, 0, 0.25);
  }
  &:active {
    box-shadow: inset 0 -0px 3px 1px rgba(0, 0, 0, 0.25);
  }

  &.active {
    background: ${({ review }) =>
      review ? '#5EB561' : 'rgba(255, 212, 0, 0.8)'};
    color: #fff;
    box-shadow: inset 0 -5px 3px 1px rgba(0, 0, 0, 0.25);
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin-left: 1em;
`

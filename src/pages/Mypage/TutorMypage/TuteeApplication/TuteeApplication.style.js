import styled from 'styled-components'

export const EnterImg = styled.img`
  width: 3em !important;
  height: 3em !important;
  margin: auto 0;
  margin-left: 0.7em;
  cursor: pointer;
  margin-left: auto;
  margin-right: 0.7em;

  &:hover {
    transform: scale(1.1);
    background: #f0f0f0;
    border-radius: 100%;

    // 연한 연두색 이미지에서 더 어두운 연두색 이미지로 변경
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(1);
    filter: brightness(1);
  }
`

export const ReviewDiv = styled.div`
  background: ${(props) => (props.review ? '#9DB4ED' : '#FF8484')} !important;
  margin-bottom: 0.7em;
  cursor: pointer;
`

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  align-items: flex-end;
  justify-content: center;

  div {
    padding: 0.3em 0.7em 0.2em 0.7em;
    border-radius: 10px;
    color: #fff;
    background: #5e84b5;
    font-weight: 600;
    font-size: 1em;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  justify-content: center;

  div {
    font-size: 1.1em;
    font-weight: 500;
  }
  div:first-child {
    font-size: 1.3em;
    font-weight: bold;
    margin-bottom: 0.3em;
  }
`

export const TuteeItemWrapper = styled.div`
  display: flex;
  padding: 1em;
  padding-right: 0.7em;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  margin: 1em 0;
  border-left: 0.5em solid #5e84b5;

  img {
    width: 3em;
    height: 3em;
    border-radius: 50%;
  }
`

export const ListWrapper = styled.div`
  flex: 1 1 0;
  background-color: #f5f5f5;
  box-shadow: 0 1px 3px 0.5px rgba(0, 0, 0, 0.15);
  border-radius: 1em;
  overflow: auto;
  padding: 0 1em;
  margin-right: 1.4em;
`

export const MyTuteeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`

export const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.3em;
  margin-top: 0.7em;
`

import styled from 'styled-components'

export const EnterImg = styled.img`
  width: 2em !important;
  height: 2em !important;
  margin: auto 0;
  margin-left: 1em;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background: #f0f0f0;
    border-radius: 100%;
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
    background: #89ce88;
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

export const CourseItemWrapper = styled.div`
  display: flex;
  padding: 1em;
  padding-right: 0.7em;
  border-bottom: 1px solid rgba(171, 205, 168, 0.4);

  img {
    width: 5em;
    height: 5em;
    border-radius: 50%;
  }
`

export const ListWrapper = styled.div`
  flex: 1 1 0;
  background-color: #fff;
  box-shadow: 0 1px 3px 0.5px rgba(0, 0, 0, 0.15);
  border-radius: 1em;
  overflow: auto;
  padding: 0 1em;
`

export const MyCourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.3em;
`

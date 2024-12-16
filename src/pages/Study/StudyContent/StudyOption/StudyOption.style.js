import styled from 'styled-components'

export const NationImg = styled.img`
  box-shadow: 0 2.5px 4px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  transition: filter 0.2s;
  filter: ${(props) => (props.check ? 'none' : 'brightness(0.8)')};
  &:hover {
    filter: ${(props) => (props.check ? 'none' : 'brightness(0.9)')};
  }
`

export const NationSelectContainer = styled.div`
  align-content: center;
  cursor: pointer;

  img:nth-child(2) {
    margin: 0 2em;
  }
`

export const CircleBtn = styled.div`
  width: 7em;
  height: 7em;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.heart ? '#FF8484' : props.search ? '#5EB561' : '#fff'};
  box-shadow: 0 2.5px 4px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.heart ? '#FF6B6B' : props.search ? '#4CAE4C' : '#fff3f3'};
  }

  &:active {
    // more darker
    background-color: ${(props) =>
      props.heart ? '#FF4E4E' : props.search ? '#3B8F3B' : '#fff'};
  }

  img {
    width: 4em;
    height: 4em;
  }
`

export const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
  align-items: flex-end;
`

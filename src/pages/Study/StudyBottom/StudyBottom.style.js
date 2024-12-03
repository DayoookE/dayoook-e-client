import styled from 'styled-components'

export const NavItem = styled.div`
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
  margin: 0 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => (props.point ? '0 1em' : '0 1.5em')};
  color: ${(props) => (props.disable ? '#A1A1A1' : '#525252')};
  cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};

  div {
    font-size: ${(props) => (props.point ? '1.5em' : '1em')};
  }

  img {
    width: 3em;
    height: 3em;
    margin-bottom: ${(props) => (props.point ? '0.1em' : '0.5em;')};

    &:hover {
      scale: 1.1;
    }
  }
`

export const StudyNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1em 0.5em 1em;
  background-color: #fff;
  border-radius: 20px;
`

export const PointContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1em 0.5em 1em;
  background-color: #fff;
  border-radius: 20px;
`

export const StudyBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

import styled from 'styled-components'

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5.8em;
  min-width: max-content;
  height: 100%;
  min-height: 20em !important;
  overflow-y: auto;
  background-color: ${(props) => (props.isTutor ? '#5E84B5' : '#5eb561')};
  border-radius: 15px;
`
export const Logo = styled.img`
  width: 5em;
  height: 5em;
  margin: 1.5em 0 0.5em 0;
  cursor: pointer;
`
export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;
  width: 4.2em;
  height: 4.2em;
  border-radius: 15px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#ffffff' : 'transparent')};
  margin-top: ${(props) => (props.isLogout ? 'auto' : '0')};

  &:hover {
    background-color: ${(props) =>
      props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.3)'};
  }
`
export const NavIcon = styled.img`
  width: 2.5em;
  height: 2.5em;
  margin: 0.35em 0 0.05em 0;
`
export const NavText = styled.div`
  font-size: 0.9em;
  font-weight: bold;
  color: ${(props) =>
    props.active ? (props.isTutor ? '#5E84B5' : '#5eb561') : '#fff'};
`

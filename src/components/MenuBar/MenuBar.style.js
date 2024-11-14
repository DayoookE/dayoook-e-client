import styled from 'styled-components'

export const MenuBarContainer = styled.div`
  display: flex;
  align-items: center;
`
export const MenuIcon = styled.img`
  width: ${(props) => (props.profile ? '1.5em' : '2.5em')};
  height: ${(props) => (props.profile ? '1.5em' : '2.5em')};
  margin-right: ${(props) => (props.profile ? '0' : '2em')};
  margin-left: ${(props) => (props.profile ? '0.5em' : '0')};
  cursor: pointer;
`

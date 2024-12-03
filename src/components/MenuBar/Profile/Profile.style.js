import styled from 'styled-components'

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  &:hover {
    .profile-popup {
      display: flex;
    }
  }
`
export const ProfileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: max-content;
  align-items: start;
  margin-left: 0.7em;
  height: 3em;
  justify-content: space-between;
  color: ${(props) => (props.isStudy ? '#fff' : '#525252')};
  div:first-child {
    font-weight: bold;
    font-size: 1.2em;
  }
  div {
    font-size: 0.9em;
  }
`

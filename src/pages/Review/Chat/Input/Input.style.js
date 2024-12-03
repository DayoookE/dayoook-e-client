import styled from 'styled-components'

export const SendBtn = styled.img`
  filter: ${(props) => (props.active ? 'none' : 'grayscale(100%)')};
`

export const ChatInputBtns = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 3em;
    height: 3em;
    margin-left: 1em;
    cursor: pointer;
  }
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0;
  background-color: #fff;
  height: 3em;

  border-radius: 10em;
  padding: 0.6em 1em 0.5em 1.5em;

  input {
    flex: 1;
    border: none;
    font-size: 1.2em;
    color: #525252;

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #52525280;
    }
  }
`

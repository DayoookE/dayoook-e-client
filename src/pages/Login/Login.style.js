import styled from 'styled-components'
import { BackgroundImg } from '../../assets/LoginPage'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  width: 100dvw;
  min-height: 100dvh;
  min-width: 100dvw;
  background-color: #fffef8;
  background-image: url(${BackgroundImg});
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32em;
  max-width: 88%;
  padding-top: 3em;
  button {
    width: 100%;
    padding: 0.8em 1.3em 0.7em 1.3em;
    border: none;
    border-radius: 10em;
    background-color: #5eb561;
    color: #fffef8;
    font-size: 1.6em;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.25);
  }
  button:hover {
    background-color: #519153;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
  }
  button:active {
    background-color: #3e6f3b;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);
  }
`

export const InputContainer = styled.div`
  width: calc(100% - 2.6em);
  padding: 0.8em 1.3em 0.6em 1.3em;
  margin-bottom: 1em;
  background-color: #ffffff;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.14);
  border-radius: 10em;
  color: #5c5c5c;
  font-size: 1.2em;
  outline: none;
  display: flex;
  align-items: center;
`

export const Icon = styled.img`
  width: 1.7em;
  height: 1.7em;
  margin-right: 0.5em;
`

export const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  width: 100%;
  font-size: 1em;
  text-overflow: ellipsis;
  color: #5c5c5c;
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  width: 32em;
  max-width: 88%;
  justify-content: space-between;
  margin-bottom: 3em;
  a {
    margin-top: 1em;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: bold;
    color: #519153;
  }
  a:hover {
    color: #3e6f3b;
  }
  a:first-child {
    color: #f78080;
  }
  a:first-child:hover {
    color: #e75b5b;
  }
`

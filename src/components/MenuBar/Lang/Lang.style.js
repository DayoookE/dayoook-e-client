import styled from 'styled-components'

export const SelectLangFlag = styled.img`
  position: absolute;
  top: -0.5em;
  right: 1.3em;
  background-color: #ffe35a;
  border-radius: 50%;
  width: 1.4em;
  height: 1.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
`
export const FlagIcon = styled.img`
  width: 2.5em;
  height: 2.5em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  cursor: pointer;
  margin: 0 0.7em;
  &:hover {
    transform: scale(1.1);
  }
`
export const LangSelectContainer = styled.div`
  display: flex;
`
export const LangContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  &:hover {
    .lang-popup {
      display: flex;
    }
  }
`
export const LangPopupContainer = styled.div`
  position: absolute;
  top: 2.5em;
  right: -1em;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  padding: 0.9em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;

  #google_translate_element {
    display: none;
  }
  display: none;
`

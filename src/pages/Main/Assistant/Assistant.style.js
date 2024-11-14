import styled from 'styled-components'

export const EnterIcon = styled.img`
  width: 2em !important;
  height: 2em !important;
  margin-left: auto;
  cursor: pointer !important;
`
export const AssistantText = styled.div`
  display: flex;
  flex-direction: column;
  height: 3.2em;
  justify-content: space-between;
  min-height: max-content;
`
export const AssistantItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  width: calc(100% - 2em);
  height: 5.8em;
  min-height: max-content;
  min-width: max-content;
  background-color: ${(props) => (props.alarm ? '#FF8484' : '#fff')};
  box-shadow: ${(props) =>
    props.alarm ? '0 0 0 0 #FF8484' : '0 0 0 1px #abcda8 inset'};
  border-radius: 15px;
  padding: 0.3em 1em 0 1em;
  color: ${(props) => (props.alarm ? '#FFFEF8' : '#525252')};
  cursor: default;
  img {
    width: 4em;
    height: 4em;
    margin-right: 0.8em;
    cursor: default;
  }
  &:hover {
    background-color: ${(props) => (props.alarm ? '#FF7474' : '#DEEBDC')};
  }
`
export const AssistantTitle = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 0.3em;
`
export const AssistantSubtitle = styled.div`
  font-size: 0.9em;
  font-weight: bold;
  margin-right: 0.5em;
`
export const AssistantContent = styled.div`
  font-size: 0.9em;
`
export const AssistantContentContainer = styled.div`
  display: flex;
`
export const AssistantList = styled.div`
  overflow-y: auto;
  div:last-child {
    margin-bottom: 0.1em;
  }
`
export const AssistantContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

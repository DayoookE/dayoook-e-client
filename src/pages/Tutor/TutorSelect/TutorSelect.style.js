import styled from 'styled-components'
import Select from 'react-select'

export const RecommentOption = styled.div`
  height: 100%;
  align-content: center;
  background: #fff8d7;
  box-shadow: inset 0px 0px 0px 3px #ffeb89;
  border-radius: 30px;
  padding: 0em 1em;
  color: #dcb800;
  font-weight: bold;
  margin-left: 0.3em;
  cursor: default;

  img {
    width: 0.8em;
    height: 0.8em;
    margin-left: 0.5em;
    margin-bottom: -0.05em;
    cursor: pointer;
  }
`

export const CustomSelect = styled(Select)`
  margin-right: 0.3em;
`

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
`

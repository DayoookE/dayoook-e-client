import styled from 'styled-components'

export const StatisticsContainer = styled.div`
  border-radius: 1em;
  box-shadow: 0 1px 3px 0.5px rgba(0, 0, 0, 0.15);
  margin-top: 1em;
  padding: 0.8em 1.8em 0.8em 1.2em;
  margin-right: 1.5em;
  height: 4em;
  background-color: #fff;
  height: 18em;
`

export const GraphTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 1em;
  padding: 0.4em 0 0.3em 0;
  font-weight: 700;
  div:first-child {
    font-size: 1.5em;
  }
  div:last-child {
    font-size: 1.1em;
  }
`

export const GraphContainer = styled.div`
  display: flex;
  box-shadow: 0 1px 3px 0.5px rgba(0, 0, 0, 0.15);
  border-radius: 1em;
  padding: 0.8em 1.8em 0.8em 1.2em;
  margin-right: 1.5em;
  height: 4em;
  background-color: #fff;

  svg {
    width: 3.5em;
  }
`

export const GraphWrapper = styled.div`
  display: flex;
`

import styled from 'styled-components'

export const BookItem = styled.div`
  margin-right: 3em;

  &:last-child {
    margin-right: 0;
  }
`

export const BookImgCover = styled.div`
  display: flex;
  flex-direction: column;
  width: 15em;
  height: 18em;
  overflow: hidden;
  box-shadow: inset 10px 10px 10px 10px #fff;
  border-bottom: 3px solid #fff;
  border-radius: 10px 30px 30px 10px;
  height: 96% !important;

  img {
    width: 100%;
    height: calc(100% - 3em);
    object-fit: cover;
    object-position: top;
    flex: 1;
  }
`

export const BookInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 0.5em 0 0.7em 0;
  margin-bottom: 0;

  div {
    font-size: 1.2em;
    font-weight: bold;
    background-color: ${(props) => props.titleColor};
    color: #fff;
    padding: 0.3em 0.7em;
    border-radius: 10px;
  }

  img {
    width: 3em;
    height: 3em;
    box-shadow: 0 2.5px 4px 1px rgba(0, 0, 0, 0.2);
    border-radius: 100%;
    cursor: pointer;

    &:hover {
      box-shadow: 0 2.5px 4px 1px rgba(0, 0, 0, 0.3);
    }

    &:active {
      box-shadow: 0 2.5px 4px 1px rgba(0, 0, 0, 0.4);
    }
  }
`

export const FairyBookCover = styled.div`
  display: flex;
  flex-direction: column;
  width: 15em;
  height: 18em;
  overflow: hidden;
  cursor: pointer;

  border: 3px solid #fff;
  border-radius: 10px 30px 30px 10px;
  background: linear-gradient(
    to right,
    #5eb561 0%,
    #ffe35a ${(props) => props.percent}%,
    #d9d9d9 ${(props) => props.percent}%
  );

  img {
    width: 100%;
    height: calc(100% - 3em);
    object-fit: cover;
    object-position: top;
    flex: 1;
    box-shadow: inset 10px 10px 10px 10px white;
  }
`

export const FairyListContainer = styled.div`
  display: flex;
  flex: 1;
  overflow-x: auto;
  width: 100%;
  align-items: center;
`

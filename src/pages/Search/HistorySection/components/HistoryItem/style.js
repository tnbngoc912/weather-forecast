import styled from 'styled-components';

export default styled.div`
  background-color: #ffe4a5;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  cursor: pointer;
  border:1px solid #ffd69e;
  &:hover {
    background-color: #FFDF95;
  }

  .icon-delete {
    font-weight: bold;
    color: #C37C1B;
    border-radius:100px;
    background-color: #F1BB70;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    &:hover {
      background-color: #F3AD4D;
    }
    span {
      width: 100%;
      text-align: center;
    }
  }

`;

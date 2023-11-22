import styled from 'styled-components';

export default styled.button`
  height: 40px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  &.btn--primary {
    border: none;
  color: #fff;
    cursor: pointer;
    background: #1462ff;
    border-radius: 8px;
    box-shadow: 0 6px 30px -10px #4a74c9;
  &:hover {
    background-color: #004DE8;
    color: #fff;
  }
  &:disabled {
  background-color: #cccccc;
  color: #666666;
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.65;
  -webkit-box-shadow: none;
  box-shadow: none;
  }
}

  &.btn--secondary {
    background-color:transparent;
  border-color: #1462ff;
  color: #3777d1;
  border: none;

  
    border-radius: 8px;
  &:hover {
  background-color: #D2E5FF;
  color: #3777d1;
  }
  &:disabled {
    color: #666666;
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.65;
  -webkit-box-shadow: none;
  box-shadow: none;
  }
}
`;

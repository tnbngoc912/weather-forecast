import styled from "styled-components";

export default styled.div`
  position: relative;
  input {
    appearance: none;
    height: 40px;
    width: 100%;
    border: 1px solid #649cff;
    border-radius: 8px;
    font-size: 16px;
    padding-left: 16px;
    padding-right: 16px;
    color: #333333;

    &:focus,
    &:focus-visible {
      border: 1px solid #3777d1;
      box-shadow: 0 6px 10px -10px #4a74c9;
      color: #333333;
      outline: none;
    }
  }

  .iconLeft,
  .iconRight {
    position: absolute;
    opacity: 0.5;
    transition: opacity 300ms;
  }

  .iconLeft {
    top: 12px;
    left: 12px;
  }

  .iconRight {
    top: 11px;
    right: 12px;
    cursor: pointer;
  }
`;

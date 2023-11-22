import styled from "styled-components";
import backgroundImg from "../../../assets/background.svg";

export default styled.div`
  .hero-container {
    margin: 0;
    width: 100%;
    .row {
      .col {
        padding: auto 4px;
      }
      gap: 10px;
      @media (min-width: 768px) {
        gap: 0px;
      }
    }
    
    .title {
      color: #333;
      font-weight: bold;
      margin-bottom: 40px;
      text-align: center;
      font-size: 20px;
      @media (min-width: 768px) {
        font-size: 36px;
      }
    }

    .search {
      display: block;
      position: relative;

      @media (min-width: 768px) {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      @media (min-width: 1024px) {
      }
    }

    .txt-hint {
      margin-top: 10px;
      font-style: italic;
    }
  }
`;

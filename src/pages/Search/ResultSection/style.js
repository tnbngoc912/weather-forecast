import styled from "styled-components";

export default styled.div`
  min-height: 260px;
  width: 90%;
  margin: 0 auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;
  background-color: #fff;
  margin-top: 50px;
  font-size: 20px;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }

  .wrapper {
    padding: 20px 40px;
    align-items: center;
    display: block;
    width: 100%;
    height: 100%;
    @media (min-width: 1024px) {
      display: flex;
      justify-content: space-around;
      width: 100%;
      height: 100%;
    }
    .error {
      text-align: center;
      img {
        width: 70%;
        margin-bottom: 20px;
        @media (min-width: 768px) {
          width: 50%;
        }
        @media (min-width: 1024px) {
          width: 70%;
        }
      }
    }
    .greetings {
      text-align: center;
      img {
        width: 20%;
        margin-bottom: 20px;
      }
    }

    .col-left {
      .location {
        font-size: 24px;
      }
      .datetime {
        font-size: 16px;
        margin-bottom: 8px;
      }
      .main {
        display: flex;
        align-items: center;
        p {
          font-size: 34px;
          font-weight: bold;
        }
      }
    }
    .separate {
      border-left: 1px solid #d9d9d9;
      height: 0;
      @media (min-width: 768px) {
        height: 100%;
      }
    }
    .col-right {
      .title {
        color: #c8c8c8;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: bold;
        font-size: 16px;
      }
      .value {
        margin-bottom: 20px;
      }
      table {
        .title {
          color: #979797;
        }
        .value {
          padding-left: 20px;
        }
      }
    }
  }
`;

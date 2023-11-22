import styled from "styled-components";
import backgroundImg from "../../assets/background.svg";

export default styled.div`
  height: 100vh;
  background-color: #4e4e4e;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
  p {
    margin: 0;
  }
  position: relative;
  .search-page {
    position: absolute;
    transform: translate(-50%, 15%);
    left: 50%;
    top: 0;
    width: 100%;
  }
`;

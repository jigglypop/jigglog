import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 200px 200px 1fr 200px;
  margin-top: -10vh;

  .jb-wrap {
    width: 400px;
    /* margin: 10px auto; */
    position: relative;
    justify-content: center;
    text-align: center;
  }
  .jb-wrap img {
    width: 100%;
    vertical-align: middle;
  }
  .jb-text {
    font-weight: 800;
    text-shadow: 2px 2px 20px gray;
    font-size: 25px;
    text-align: center;
    position: absolute;
    background-color: black;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: blink 1.2s ease-in-out infinite alternate;

    @keyframes blink {
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }


  h2 {
    margin: 2px;
  }
  @media (max-width: 1000px) {
    margin-top: 0px;
    .jb-wrap {
      width: 300px;
      margin: 10px auto;
      position: relative;
    }
    .jb-wrap img {
      width: 100%;
      vertical-align: middle;
    }
    .jb-text {
      color: white;
      font-weight: 800;
      text-shadow: 2px 2px 20px gray;
      font-size: 20px;
      margin-top: -50px;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: blink 1.2s ease-in-out infinite alternate;

      @keyframes blink {
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }
    }


    h2 {
      margin: 2px;
    }
  }
`;
export default ImageWrapper;

import styled from "styled-components";
import Clearfix from "~/components/Common/Clearfix";

export const Wrapper = styled.div`
  padding: 10%;
  @media (max-width: 414px) {
    padding: 70px 16px 0;
  }

  & > ${Clearfix} {
    margin: auto;
    max-width: 1100px;
  }

  button {
    float: right;
  }
`;

export const Title = styled.div`
  color: white;
  animation: blink 1.2s ease-in-out infinite alternate;
  background: transparent;
  text-align: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
  font-size: 50px;
  font-weight: 800;
  text-shadow: 2px 2px 20px white;

  @keyframes blink {
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const PortfolioDescription = styled.section`
  background: transparent;
  float: left;
  padding: 0 0 0 36px;
  width: 50%;
  margin-bottom: 200px;
  @media (max-width: 600px) {
    margin-left: 20px;

    float: none;
    margin: 0 10px 16px 10px;
    padding: 0 0 16px;
    width: 100%;
    h1 {
      margin-top: 40px;
      font-size: 30px;
      font-weight: 800;
      text-shadow: 2px 2px 20px white;
    }
    h2 {
      margin-top: 40px;
      font-size: 26px;
      font-weight: 800;
      text-shadow: 2px 2px 20px white;
    }
    h3 {
      margin-top: 40px;
      font-size: 20px;
      font-weight: 800;
      text-shadow: 2px 2px 20px white;
    }
    h4 {
      margin-top: 40px;
      font-weight: 800;
      font-size: 18px;
    }
    h5 {
      margin-top: 40px;
      font-size: 16px;
      font-weight: 800;
      text-shadow: 2px 2px 20px white;
    }

    p {
      margin-top: 20px;
      font-weight: 800;
      font-size: 10px;
    }
    li {
      margin-top: 20px;
      font-weight: 800;
      font-size: 10px;
    }
    blockquote {
      line-height: 1.2em;
      color: #aaa;
      font-size: 10px;
    }
    pre {
      margin: 20px 0 0;
    }
  }

  h1 {
    margin-top: 40px;
    font-size: 30px;
    font-weight: 800;
    text-shadow: 2px 2px 20px white;
  }
  h2 {
    margin-top: 40px;
    font-size: 26px;
    font-weight: 800;
    text-shadow: 2px 2px 20px white;
  }
  h3 {
    margin-top: 40px;
    font-size: 20px;
    font-weight: 800;
    text-shadow: 2px 2px 20px white;
  }
  h4 {
    margin-top: 40px;
    font-weight: 800;
    font-size: 18px;
  }
  h5 {
    margin-top: 40px;
    font-size: 16px;
    font-weight: 800;
    text-shadow: 2px 2px 20px white;
  }

  p {
    margin-top: 20px;
    font-weight: 800;
    font-size: 14px;
  }
  li {
    margin-top: 20px;
    font-weight: 800;
    font-size: 14px;
  }
  blockquote {
    line-height: 1.2em;
    color: #aaa;
    font-size: 14px;
  }
  pre {
    margin: 20px 0 0;
  }
`;

export const PortfolioImages = styled.section`
  float: left;
  padding: 0 36px 0 0;
  width: 50%;
  overflow-y: scroll;
  max-height: calc(120vh - 100px);
  background: transparent;

  @media (max-width: 600px) {
    float: none;
    padding: 0;
    width: 100%;
    height: auto;
    overflow-y: visible;
  }

  img {
    padding: 16px;
    width: 100%;
    height: auto;

    @media (max-width: 414px) {
      float: left;
      margin: 0 0 8px;
      padding: 0;
      &:last-child {
        margin: 0 0 16px;
      }
    }
  }

`;
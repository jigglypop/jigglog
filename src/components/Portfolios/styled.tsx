import styled from "styled-components";

export const PortfoliosWrapper = styled.div`
  .titlebig {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15vw;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25vw;
  }
  .iconsetbig {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35vw;
  }
`

export const Wrapper = styled.div`
  margin: auto;
  padding: 120px 0 0;
  max-width: 1200px;
  font-size: 16px;
  background-image: white;
  @media (max-width: 614px) {
    padding: 70px 16px 0;
  }

  &:before,
  &:after {
    display: block;
    content: "";
    clear: both;
  }

  h1 {
    margin: 0.67em 0;
    font-size: 36px;
  }

  time {
    margin: 1em 0;
    font-size: 14px;
  }
  padding: 100px 0 0;
  @media (max-width: 414px) {
    padding: 70px 0 0;
  }
`;

export const TitleBig = styled.div`
  animation: blink 1.2s ease-in-out infinite alternate;

  @keyframes blink {
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  font-size: 50px;
  font-weight: 800;
  text-shadow: 4px 4px 40px white;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const Content = styled.div`
  font-size: 20px;
  font-weight: 800;
  text-shadow: 4px 4px 40px white;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export interface ILogoItem {
  second : number
}

export const LogoItem = styled.div<ILogoItem>`
    color: white;
    text-shadow: 2px 2px 20px white;
    font-weight: 800;
    font-size: 15px;
    margin: 5px;
    animation: blink ${(props) => props.second}s ease-in-out infinite alternate;
    @media (max-width: 600px) {
    font-size: 10px;
    }

    @keyframes blink {
    30% {
        opacity: 0.4;
    }
    100% {
        opacity: 1;
    }
    }
`;
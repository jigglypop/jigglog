import styled from "styled-components";


// 헤더바
export const FooterDiv = styled.nav`
  transition: all 0.3s ease-in-out;
  font-family: "NanumBarunGothicSubset";
  src: local("NanumBarunGothicSubset"),
    url("../../fonts/NanumBarunGothicSubset.woff2") format("woff2");
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  bottom: 0;
  height: 50px;
  width: 100%;
  font-size: 10px;
  font-weight: 600;
  z-index: 2;
  background-color: #141414;
  .text{
    font-size: 10px;
    font-weight: 800;
    padding: 50px;
  }
`

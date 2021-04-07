import styled, { css } from "styled-components";
import { Link } from "gatsby";

export const HeaderWrapper = styled.div`
  font-family: "NanumBarunGothicSubset";
  src: local("NanumBarunGothicSubset"),
    url("../../fonts/NanumBarunGothicSubset.woff2") format("woff2");
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  top: 0;
  height: 60px;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  z-index: 3000;
  background-color: #141414;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const SubMenu = styled.ul`
  position: absolute;
  top: 40px;
  line-height: 1.8em;
  font-size: 10px;
  font-weight: 800;
  overflow: hidden;
  transition: max-height 0.2s ease-out 0.1s;
  li {
    padding: 6px 12px;
  }
  a:hover {
  }
`;

export const ListMenu = styled.li`
  display: inline-block;
  position: relative;
  padding: 0 0 0 2em;
  font-weight: 500;
  ul {
    max-height: 0;
    white-space: nowrap;
  }
  &:hover {
    ul {
      max-height: 360px;
    }
  }
  small {
    font-size: 10px;
  }
`;

export const StyledLink = styled(Link)`
  @media (max-width: 414px) {
    &[href="/"] {
      display: flex;
      height: 60px;
      align-items: center;
    }
  }
`;

export const MenuTitle = styled.div`
  font-size: 15px;
  font-weight: 800;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const SmallItem = styled.div`
  margin: 10px;
  font-size: 12px;
  font-weight: 800;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
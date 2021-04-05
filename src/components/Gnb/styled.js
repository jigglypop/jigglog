import styled, { css } from "styled-components";
import { Link } from "gatsby";

export const GnbWrapper = styled.div`
  /* @import url("https://fonts.googleapis.com/css?family=Lato"); */
  font-family: "NanumBarunGothicSubset";
  src: local("NanumBarunGothicSubset"),
    url("../../fonts/NanumBarunGothicSubset.woff2") format("woff2");
  /* font-family: "NanumBarunGothicSubset" !important; */
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
  font-size: 12px;
  font-weight: 500;
  overflow: hidden;
  transition: max-height 0.4s ease-out 0.1s;

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

  &.active {
  }

  &:hover {
  }
`;

export const SearchBarWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 276px;
  margin: auto;
  padding: 0 36px 0 0;
  text-align: right;

  @media (max-width: 800px) {
    display: none;
    position: relative;
    padding: 0;
    width: 100%;
  }

  label {
    position: absolute;
    top: 33px;
    right: 36px;
    padding: 0 8px 0 0;
    z-index: 1001;

    @media (max-width: 414px) {
      position: relative;
      top: 0;
      right: 0;
    }
  }
`;

export const SearchedPosts = styled.div`
  position: absolute;
  top: 80px;
  right: 3px;
  width: 317px;
  max-height: 500px;
  box-shadow: ${({ isEmpty }) =>
    isEmpty ? "0 0 0" : "0 2px 4px rgba(0,0,0,0.2)"};
  box-shadow: ${({ isEmpty }) =>
    isEmpty
      ? "0 0 0"
      : "0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08)"};
  font-weight: 400;
  overflow-y: auto;

  @media (max-width: 414px) {
    display: none;
    position: static;
    width: 100%;
    max-height: none;
    box-shadow: 0 0 0;
  }
`;

export const Title = styled.h4`
  width: 100%;
  height: 2.4em;
  line-height: 2.4em;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Summary = styled.p`
  cursor: pointer;
  margin: 0 0 2px;
  height: 1.8em;
  line-height: 1.8em;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Tag = styled.span`
  padding: 0 0 0 0.4em;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

export const SearchedPost = styled.article`
  padding: 4px 8px;
  border-bottom: 1px solid #eee;
  line-height: 1.4em;

  h4,
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const MenuTitle = styled.div`
  font-size: 15px;
  font-weight: 800;
  /* text-shadow: 2px 2px 20px white; */
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const SmallItem = styled.div`
  margin: 10px;
  font-size: 15px;
  font-weight: 800;
  text-shadow: 1px 1px 10px white;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
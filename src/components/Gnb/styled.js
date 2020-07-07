import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { FaCaretDown, FaHome } from "react-icons/fa";
import { PRIMARY_COLOR } from "~/components/Common/constants";

export const GnbWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Lato");
  position: fixed;
  width: 100%;
  font-size: 14px;
  font-family: Lato;
  font-weight: 600;
  z-index: 3000;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
`;

export const SubMenu = styled.ul`
  position: absolute;
  top: 40px;
  line-height: 1.8em;
  font-size: 12px;
  font-weight: 500;
  overflow: hidden;
  transition: max-height 0.4s ease-out 0.1s;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};

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
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};

  a {
    color: ${({ theme: { color } }) => color};
  }

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

export const Home = styled(FaHome)`
  font-size: 36px;
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

export const SearchBar = styled.input`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 36px;
  margin: auto;
  padding: 0 0.4em;
  width: 240px;
  height: 2.4em;
  line-height: 2.4em;
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  border-radius: 4px;
  border: 1px solid ${({ theme: { color } }) => color};
  font-size: 14px;
  outline: 0;
  z-index: 1000;

  @media (max-width: 414px) {
    display: none;
    right: 0;
    left: 0;
    width: 100%;
  }

  &:focus {
    border-color: ${PRIMARY_COLOR};
  }
`;

export const SearchedPosts = styled.div`
  position: absolute;
  top: 80px;
  right: 3px;
  width: 317px;
  max-height: 500px;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
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

export const Background = styled.div`
  display: none;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { color } }) => color};
  transition: opacity 0.4s ease-out 0.1s;
  opacity: ${({ isActive }) => (isActive ? ".5" : "0")};

  @media (max-width: 414px) {
    display: block;
  }
`;

export const MobileMenus = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 16px;
  width: 80%;
  height: 100%;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  transition: left.4s ease-out 0.1s;
  z-index: 3;
  overflow-y: auto;

  @media (max-width: 414px) {
    display: block;
    height: 100vh;
  }
`;

export const MobileMenu = styled.section`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;

  @media (max-width: 414px) {
    display: block;
    line-height: 60px;
    pointer-events: ${({ isActive }) => (isActive ? "all" : "none")};

    ul,
    li,
    div,
    input {
      display: block;
    }
  }

  li {
    padding: 0;
    width: 100%;

    & > ul {
      position: static;
      max-height: ${({ isSubActive }) =>
        isSubActive ? "0" : "360px"} !important;

      li {
        @media (max-width: 414px) {
          padding: 0 0 0 16px;
        }
      }
    }
  }

  & > div + div {
    left: ${({ isActive }) => (isActive ? "0" : "-100%")};
    box-shadow: ${({ isActive }) =>
      isActive ? "0 2px 4px rgba(0,0,0,0.2)" : "0 0 0"};
    box-shadow: ${({ isActive }) =>
      isActive
        ? "0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08)"
        : "0 0 0"};
  }
`;

export const ToggleWrapper = styled.label`
  position: absolute;
  top: 28px;
  right: 294px;
  z-index: 3;

  @media (max-width: 414px) {
    top: 15px;
    right: auto;
    left: 16px;
  }

  .react-toggle {
    touch-action: pan-x;

    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .react-toggle--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    -webkit-transition: opacity 0.25s;
    transition: opacity 0.25s;
  }

  .react-toggle-track {
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: #4d4d4d;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #000000;
  }

  .react-toggle--checked .react-toggle-track {
    background-color: #000000;
  }

  .react-toggle--checked:hover:not(.react-toggle--disabled)
    .react-toggle-track {
    background-color: #000000;
  }

  .react-toggle-track-check {
    display: flex;
    align-items: center;
    position: absolute;
    width: 14px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    left: 8px;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-check {
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle-track-x {
    display: flex;
    align-items: center;
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    right: 10px;
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-x {
    opacity: 0;
  }

  .react-toggle-thumb {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border: 1px solid #4d4d4d;
    border-radius: 50%;
    background-color: #fafafa;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }

  .react-toggle--checked .react-toggle-thumb {
    left: 27px;
    border-color: #4d4d4d;
  }

  .react-toggle--focus .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 3px 2px #0099e0;
    -moz-box-shadow: 0px 0px 3px 2px #0099e0;
    box-shadow: 0px 0px 2px 3px #0099e0;
  }

  .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 5px 5px #0099e0;
    -moz-box-shadow: 0px 0px 5px 5px #0099e0;
    box-shadow: 0px 0px 5px 5px #0099e0;
  }
`;

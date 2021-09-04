import styled from 'styled-components';
import { Link } from 'gatsby';

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
    &[href='/'] {
      display: flex;
      height: 60px;
      align-items: center;
    }
  }
`;

export const MenuTitle = styled.div`
  font-size: 13px;
  font-weight: 800;
  margin: 0 0.25rem;
  text-shadow: 2px 2px 2px #141414;
  transition: all 0.3s ease-out;
  &:hover {
    color: rgba(0, 207, 255);
  }
  @media (max-width: 600px) {
    &.menuvisible {
      visibility: hidden;
    }
    font-size: 12px;
  }
`;

// 헤더바
export const HeaderDiv = styled.nav`
  grid-row: 1/2;
  grid-column: 1/3;
  transition: all 0.3s ease-in-out;
  position: fixed;
  align-items: center;
  top: 0;
  height: 50px;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  z-index: 2;
  background: rgba(0, 0, 0, 0.9);
  -webkit-backdrop-filter: brightness(1.1) blur(50px);
  backdrop-filter: brightness(1.1) blur(50px);

  .test {
    padding: 2px;
    border: 2px solid white;
  }

  &.active {
    padding-left: 200px;
  }

  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease-in-out;
  }

  .ul {
    display: flex;
    list-style-type: none;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin: 0 0.5rem;
  }

  .logo {
    font-size: 15px;
    font-weight: 800;
  }

  .li {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 12px;
    font-weight: 800;
    margin: 5px;
  }

  .be-person {
    color: white;
  }

  .logout {
    cursor: pointer;
  }

  .hamberger {
    cursor: pointer;
    font-size: 20px;
    &:hover {
      color: rgba(0, 207, 255);
    }
  }
  .RiMoonClearLine {
    width: 30px;
    height: 30px;
    &:hover {
      color: rgba(0, 207, 255);
    }
  }
`;
// 사이드바
export const SideBarDiv = styled.div`
  grid-row: 1/3;
  grid-column: 1/3;
  background: linear-gradient(
    20deg,
    rgba(172, 0, 255, 0.8) 46%,
    rgba(0, 207, 255, 0.8) 100%
  );
  visibility: hidden;
  position: fixed;
  width: 0;
  height: 100%;
  padding: 10px;
  z-index: 3;
  transition: all 0.3s ease-in-out;

  &.active {
    visibility: visible;
    width: 200px;
  }
`;

export const SideBarInnerDiv = styled.div`
  position: relative;
  background-color: #141414;
  height: 100%;
  display: grid;
  grid-template-rows: 100px 1fr;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  transition-delay: -0.2s;
  z-index: 2;

  &.active {
    transition-delay: 0.2s;
    visibility: visible;
  }
`;

export const SideBarTopDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-row: 1/2;
  z-index: 3;
  margin-top: 3rem;

  h1 {
    font-size: 13px;
    font-weight: 600;
    margin: 10px;
    text-shadow: 2px 2px 2px gray;
  }
  hr {
    border: none;
    background-color: rgba(255, 255, 255, 0.5);
    width: 60%;
    height: 2px;
  }
`;

export const SideBarTopButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-row: 2/3;
  z-index: 3;

  h1 {
    font-size: 10px;
    font-weight: 600;
    margin: 10px;
  }
  hr {
    border: none;
    background-color: rgba(255, 255, 255, 0.5);
    width: 60%;
    height: 2px;
  }
`;

export const SideBarListDiv = styled.div`
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
  background-color: #141414;
  .categorytitle {
    color: rgba(0, 207, 255);
    font-size: 16px;
    font-weight: 800;
    margin: 10px;
    padding: 10px;
    text-shadow: 0 0 10px rgba(0, 207, 255);
    border: 2px solid rgba(0, 207, 255);
  }
`;
export const SmallItem = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  color: red;
  font-size: 12px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .smallinner {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }
  &:hover {
    a {
      color: rgba(0, 207, 255);
    }
  }
`;
export const SideBarItemsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  h1 {
    font-size: 10px;
    font-weight: 600;
    margin: 5px;
  }
  hr {
    border: none;
    background-color: rgba(255, 255, 255, 0.5);
    width: 90%;
    height: 2px;
  }
`;

export const SideBarItemDiv = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  background: #141414;
  margin: 2px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

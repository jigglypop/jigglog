import React, { useReducer, useCallback } from "react";
import { Link } from "gatsby";
import { RiMoonClearLine } from "react-icons/ri";
import {
  List,
  SubMenu,
  ListMenu,
  StyledLink,
  MenuTitle,
  SmallItem,
  HeaderDiv
} from "./styled";
import { GiHamburgerMenu } from "react-icons/gi";


export interface IHeader {
  location : {
    pathname: string;
  }
  categories: object[];
  hasPortfolio: object;  
  // postInformations: object;
  categorySet: object;
};

const TOGGLE_MENU = "TOGGLE_MENU";
const TOGGLE_SUB_MENU = "TOGGLE_SUB_MENU";

const initialState = {
  isMenuOpened: false,
  isSubMenuClosed: false,
  searchKeyword: "",
};

const reducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case TOGGLE_MENU: {
      const isMenuOpened = !state.isMenuOpened;
      return {
        ...state,
        isMenuOpened,
      };
    }
    case TOGGLE_SUB_MENU: {
      const isSubMenuClosed = !state.isSubMenuClosed;
      return {
        ...state,
        isSubMenuClosed,
      };
    }
    default:
      return state;
  }
};

const toggleHam = () =>{
  const SideBarEl = document.querySelector('.SideBarDiv');
  const SideBarInnerEl = document.querySelector('.SideBarInnerDiv');
  const HeaderDivEl =  document.querySelector('.HeaderDiv');

  if (SideBarEl && HeaderDivEl && SideBarInnerEl) {
    SideBarInnerEl.classList.toggle('active')
    HeaderDivEl.classList.toggle('active')
    SideBarEl.classList.toggle('active')
  }
}

const Header = ({
  location,
}: IHeader) => {
  const [{ searchKeyword }, dispatch] = useReducer(reducer, initialState);
  const toggleMenu = useCallback(() => {
    dispatch({ type: TOGGLE_MENU });
  }, []);

  const { pathname } = location;
  const isPortfolio = pathname.replace(/\/$/, "").startsWith("/portfolios");
  const isHome = pathname.replace(/\/$/, "") === "";
  const isResume = pathname.replace(/\/$/, "") === "/resume";
  const isPost = !(isPortfolio || isHome || isResume);

  return (
    <HeaderDiv className="HeaderDiv">
        <div className="container">
          <div className="ul">
              <div className="li">
                  <GiHamburgerMenu 
                    onClick = {toggleHam}
                    style={{ color:'white', fontSize:'20px'}} 
                    className="hamberger"/>
              </div>
              <div className="li">
                <StyledLink to="/">
                  <RiMoonClearLine
                    style={{
                      width: "25px",
                      height: "25px",
                    }}
                  />
                </StyledLink>
                <StyledLink to="/">
                  <MenuTitle className="menuvisible">JIGGLOG</MenuTitle>
                </StyledLink>
              </div>
          </div>
          <div className="ul">
            <div className="li">
                <h4>
                  <StyledLink to="/portfolios" className={isPortfolio ? "active" : ""}>
                    <MenuTitle className="menuvisible">포트폴리오</MenuTitle>
                  </StyledLink>
                </h4>
            </div>
            <div className="li">
                <h4>
                  <StyledLink to="/resume" className={isResume ? "active" : ""}>
                    <MenuTitle className="menuvisible">이력서</MenuTitle>
                  </StyledLink>
                </h4>
            </div>
          </div>
        </div>
    </HeaderDiv>
  );
};


export default Header;

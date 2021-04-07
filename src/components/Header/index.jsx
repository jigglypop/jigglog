import React, { useReducer, useCallback } from "react";
import { Link } from "gatsby";
import { RiMoonClearLine } from "react-icons/ri";
import {
  HeaderWrapper,
  List,
  SubMenu,
  ListMenu,
  StyledLink,
  MenuTitle,
  SmallItem
} from "./styled";

const TOGGLE_MENU = "TOGGLE_MENU";
const TOGGLE_SUB_MENU = "TOGGLE_SUB_MENU";
const INPUT_KEYWORD = "INPUT_KEYWORD";

const initialState = {
  isMenuOpened: false,
  isSubMenuClosed: false,
  searchKeyword: "",
};

const reducer = (state = initialState, action) => {
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
    case INPUT_KEYWORD: {
      const { searchKeyword } = action;
      return {
        ...state,
        searchKeyword,
      };
    }
    default:
      return state;
  }
};

const Header = ({
  location,
  categories,
  postInformations,
  hasPortfolio,
  categorySet,
}) => {
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
    <HeaderWrapper>
      <List>
        <ListMenu>
          <StyledLink to="/">
            <RiMoonClearLine
              style={{
                width: "25px",
                height: "25px",
              }}
            />
          </StyledLink>
        </ListMenu>
        <ListMenu>
          <StyledLink to="/pages/1" className={isPost ? "active" : ""}>
            <MenuTitle>POSTS</MenuTitle>
          </StyledLink>
          <SubMenu>
            <CategoryMenu
              categories={categories}
              toggleMenu={toggleMenu}
              categorySet={categorySet}
            />
          </SubMenu>
        </ListMenu>
        {hasPortfolio ? (
          <ListMenu>
            <StyledLink
              to="/portfolios"
              className={isPortfolio ? "active" : ""}
            >
              <MenuTitle>PORTFOLIOS</MenuTitle>
            </StyledLink>
          </ListMenu>
        ) : null}
        <ListMenu>
          <StyledLink to="/resume" className={isResume ? "active" : ""}>
            <MenuTitle>RESUME</MenuTitle>
          </StyledLink>
        </ListMenu>
      </List>
    </HeaderWrapper>
  );
};

const CategoryMenu = ({ categorySet, toggleMenu }) => {
  return (
    <div>
      {categorySet.map(({ key, length }) => {
        if (key === "__ALL__") {
          return null;
        }

        return (
          <li key={key} style={{ background: "black" }}>
            <SmallItem>
              <Link to={`/categories/${key}/1`} onClick={toggleMenu}>
                {key}
                &nbsp;
                <small>{`(${length})`}</small>
              </Link>
            </SmallItem>
          </li>
        );
      })}
    </div>
  );
};

export default Header;

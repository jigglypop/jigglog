import React from "react";
import { RiMoonClearLine } from "react-icons/ri";
import {
  StyledLink,
  MenuTitle,
  HeaderDiv,
} from "./styled";
import { GiHamburgerMenu } from "react-icons/gi";

export interface IHeader {
  location : {
    pathname: string;
    host: string;
  }
  categories: object[];
  hasPortfolio: object;  
  categorySet: object;
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
  const { pathname, host } = location;
  const isPortfolio = pathname.replace(/\/$/, "").startsWith("/portfolios");
  const isResume = pathname.replace(/\/$/, "") === "/resume";
  return (
    <div>
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
        {/* <Notice>
          <div className="">
            <h1>블로그 주소를 이전했습니다</h1>
          </div>
          <div className="">
            <h1>
              {host !== "http://jigglog.s3-website.ap-northeast-2.amazonaws.com/" && <a href={`http://jigglog.s3-website.ap-northeast-2.amazonaws.com/categories/%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EA%B8%B0%EC%82%AC%20%EC%8B%A4%EA%B8%B0/1`}>주소 바로가기</a>}
            </h1>
          </div>
        </Notice> */}
      </HeaderDiv>
    </div>

  );
};


export default Header;

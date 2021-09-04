import React, { useEffect } from 'react';
import {
  SideBarDiv,
  SideBarInnerDiv,
  SideBarTopDiv,
  SideBarListDiv,
  SmallItem,
} from './styled';
import { Link } from 'gatsby';
import BorderSide from '../Common/borderside/BorderSide';

export interface ISideBar {
  categorySet: any;
}

const SideBar = ({ categorySet }: ISideBar) => {
  useEffect(() => {
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
    const sidebaritems = document.querySelectorAll('.hovercolorsidebar');
    sidebaritems.forEach((item: any) => {
      item.addEventListener('mouseover', () => {
        item.style.background =
          colors[Math.floor(Math.random() * colors.length)];
      });
      item.addEventListener('mouseout', () => {
        item.style.background = '#1d1d1d';
      });
    });
  }, []);
  return (
    <SideBarDiv className="SideBarDiv">
      <SideBarInnerDiv className="SideBarInnerDiv">
        <SideBarTopDiv>
          <div>
            <Link to={`/resume`}>
              <BorderSide width="60px" height="60px" />
            </Link>
          </div>
        </SideBarTopDiv>
        <SideBarListDiv>
          <h6 className="categorytitle">카테고리 목록</h6>
          {categorySet.map(({ key, length }: any) => {
            if (key === '__ALL__') {
              return null;
            }
            return (
              <SmallItem key={key}>
                <Link to={`/categories/${key}/1`} className="smallinner">
                  {key}
                  <small>{`(${length})`}</small>
                </Link>
              </SmallItem>
            );
          })}
        </SideBarListDiv>
      </SideBarInnerDiv>
    </SideBarDiv>
  );
};
export default SideBar;

import React from 'react';
import Header, { IHeader } from './Header';
import SideBar from './SideBar';

const HeaderDiv = ({
    location,
    categories,
    hasPortfolio,
    categorySet,
  }: IHeader) => {
    return (
        <>
            <Header 
                location={location}
                categories={categories}
                hasPortfolio={hasPortfolio}
                categorySet={categorySet}/>
            <SideBar 
                categorySet={categorySet}/>
        </>
    );
}

export default HeaderDiv;

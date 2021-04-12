import React from "react";
import Helmet from "react-helmet";
import { TITLE } from "../../constants";
import { 
  MainTitle,
  ToolTip
} 
from './styled'

const Main = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="og:title" content={TITLE} />
      </Helmet>
      <MainTitle>
        <h1>JIGGLOG</h1>
        <h3>JIGGLOG에 오신 것을 환영합니다</h3>
      </MainTitle>
      <ToolTip id="tooltip">
        <h1>툴팁</h1>
        <h2>행성 위에 마우스를 가져다 놓으면 설명을 보실 수 있습니다.</h2>
      </ToolTip>
    </>
  );
};

export default Main;

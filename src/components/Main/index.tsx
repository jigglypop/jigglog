import React from 'react';
import Helmet from 'react-helmet';
import { TITLE } from '../../constants';
import Progress from '../layout/Progress';
import { MainTitle, ToolTip } from './styled';

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
    </>
  );
};

export default Main;

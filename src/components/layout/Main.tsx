import React from 'react';
import Helmet from 'react-helmet';
import { TITLE } from '../../constants';

const Main = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="og:title" content={TITLE} />
      </Helmet>
    </>
  );
};

export default Main;

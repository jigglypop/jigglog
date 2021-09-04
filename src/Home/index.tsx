import React from 'react';
import Helmet from 'react-helmet';
import { TITLE } from '../constants';
import './styled.css';
import './reset.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="og:title" content={TITLE} />
      </Helmet>
    </>
  );
};

export default Home;

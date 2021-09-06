import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { PREFIX } from '~/constants';
import SimpleWrapper from '~/components/Common/SimpleWrapper';

const Wrapper = styled(SimpleWrapper)`
  padding: 100px 0 0;
  min-height: 100vh;
  text-align: center;
  font-weight: 800;

  @media (max-width: 414px) {
    padding: 70px 0 0;
  }

  h1 {
    font-size: 30px;
  }
`;

const NotFoundPage = () => (
  <Wrapper>
    <Helmet>
      <title>{`${PREFIX}PAGE NOT FOUND`}</title>
      <meta name="og:title" content={`${PREFIX}PAGE NOT FOUND`} />
    </Helmet>
    <h1>페이지가 없습니다.</h1>
    <Link to="/">메인으로</Link>
  </Wrapper>
);

export default NotFoundPage;

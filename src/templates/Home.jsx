import React from 'react';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
// import List from '~/components/List';

const HomeTemplate = props => (
  <Layout {...props}>
    <h1>하이</h1>
    {/* <Home {...props} /> */}
  </Layout>
);

export default HomeTemplate;


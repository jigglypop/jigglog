import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { TITLE } from '../constants';
import './style.css';

const HomeLayout = props => (
  <Layout {...props}>
    <Helmet>
      <meta
        name="google-site-verification"
        content="NTj68jTRw50DTm4oJDLc_VKe1p9ItHiQdJuDBRsikaE"
      />
      <script
        data-ad-client="ca-pub-4040588049793807"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <title>{TITLE}</title>
      <meta name="og:title" content={TITLE} />
    </Helmet>
  </Layout>
);

export default HomeLayout;

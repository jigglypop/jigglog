import React from 'react';
import Layout from '~/components/layout';
import Home from '~/Home';
import Helmet from 'react-helmet';

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
    </Helmet>
    <Home />
  </Layout>
);

export default HomeLayout;

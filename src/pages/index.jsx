import React from "react";
import Layout from "~/components/layout";
import Home from "~/components/Home";
import Helmet from "react-helmet";

const HomeLayout = (props) => (
  <Layout {...props}>
    <Helmet>
      <meta
        name="google-site-verification"
        content="iJNm9P7wYJjzTUuWrwBW8Hgl1I7JevIZjuUyGFAshLg"
      />
    </Helmet>
    <Home />
  </Layout>
);

export default HomeLayout;

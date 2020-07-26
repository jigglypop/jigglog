import React from "react";
import Layout from "~/components/layout";
import Home from "~/components/Home";
import Helmet from "react-helmet";

const HomeLayout = (props) => (
  <Layout {...props}>
    <Helmet>
      <meta
        name="google-site-verification"
        content="NTj68jTRw50DTm4oJDLc_VKe1p9ItHiQdJuDBRsikaE"
      />
    </Helmet>
    <Home />
  </Layout>
);

export default HomeLayout;

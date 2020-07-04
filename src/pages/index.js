import React from "react";

// Components
import Layout from "../components/Layout";
import Seo from "../components/Seo";

// Templates
import Home from "../templates/Home";

import '../styles/index.scss';

const IndexPage = () => (
  <>
    <Seo />
    <Layout>
      <Home />
    </Layout>
  </>
);

export default IndexPage;

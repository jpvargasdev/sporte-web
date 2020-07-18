import React from "react";

// api
import { graphql } from "gatsby";

// components
import Layout from "../components/Elements/Layout";
import Seo from "../components/Base/Seo";

// templates
import About from '../templates/About';

// styles
import '../styles/index.scss';

export const query = graphql`
  {
    contentfulPage(title: { eq: "About" }) {
      description
      seoTitle
      content {
        json
      }
    }
  }
`;

const AboutPage = ({ data }) => {
  const {
    description,
    seoTitle,
    content
  } = data.contentfulPage;

  return (
    <>
      <Seo title={seoTitle} description={description}/>
      <Layout>
        <About content={content} />
      </Layout>
    </>
  );
};

export default AboutPage;

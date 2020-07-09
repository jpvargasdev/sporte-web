import React from "react";

// api
import { graphql } from "gatsby";

// components
import Layout from "../components/Layout";
import Seo from "../components/Seo";

// templates
import Home from "../templates/Home";

// styles
import '../styles/index.scss';

export const query = graphql`
  {
    allContentfulArticle {
      totalCount
      nodes {
        title
        description
        bannerImage {
          title
          file {
            url
          }
        }
      }
    },
    contentfulPage(title: {eq: "Home"}) {
      description
      seoTitle
      structure {
        id
        page {
          carousel {
            items
          }
          grid {
            items
          }
        }
      }
    }
  }
`;

const HomePage = ({ data }) => {
  const {
    description,
    seoTitle,
    structure
  } = data.contentfulPage;

  return (
    <>
      <Seo />
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default HomePage;

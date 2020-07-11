import React from "react";

// api
import { graphql } from "gatsby";

// components
import Layout from "../components/Elements/Layout";
import Seo from "../components/Base/Seo";

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
          widget {
            title
            type
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

  const {
    totalCount,
    nodes,
  } = data.allContentfulArticle;

  return (
    <>
      <Seo title={seoTitle} description={description}/>
      <Layout>
        <Home structure={structure} totalCount={totalCount} cards={nodes} />
      </Layout>
    </>
  );
};

export default HomePage;

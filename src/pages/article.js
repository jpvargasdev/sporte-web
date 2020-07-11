import React from "react";

// api
import { StaticQuery, graphql } from "gatsby"

// components
import Layout from "../components/Elements/Layout";
import Seo from "../components/Base/Seo";

// templates
import Article from "../templates/Article";

// styles
import '../styles/index.scss';

export const query = graphql`
  {
    contentfulPage(title: {eq: "Article"}) {
      description
      seoTitle
    }
    allContentfulArticle {
      totalCount
      nodes {
        title
        description
        id
        content {
          json
        }
        bannerImage {
          title
          file {
            url
          }
          id
        }
        author {
          id
          description
          name
          profileImage {
            file {
              fileName
              url
            }
          }
        }
      }
    }
  }
`;

const ArticlePage = ({ data, location }) => {
  const { description } = data.contentfulPage;

  const { nodes } = data.allContentfulArticle;

  const {
    search
  } = location;

  const articleId = search.split("=")[1];
  const article = nodes.filter(article => article.id === articleId);

  return (
    <>
      <Seo title={article[0].title} description={description}/>
      <Layout>
        <Article data={article && article[0]} />
      </Layout>
    </>
  );
};

export default ArticlePage;

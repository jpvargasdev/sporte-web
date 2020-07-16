import React from "react";

// api
import { graphql } from "gatsby";

// components
import Layout from "../components/Elements/Layout";
import Seo from "../components/Base/Seo";

// templates
import Contact from '../templates/Contact'

// styles
import '../styles/index.scss';

export const query = graphql`
  {
    contentfulPage(title: {eq: "Contact"}) {
      description
      seoTitle
    }
  }
`;

const ContactPage = ({ data }) => {
  const {
    description,
    seoTitle,
    structure
  } = data.contentfulPage;

  return (
    <>
      <Seo title={seoTitle} description={description}/>
      <Layout>
        <Contact structure={structure} />
      </Layout>
    </>
  );
};

export default ContactPage;

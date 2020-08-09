import Reaact, { useEffect, useState } from 'react'

// components
import Layout from "../components/Elements/Layout";
import Seo from "../components/Base/Seo";

// api
import * as client from '../api';

// templates
import Contact from "../templates/Contact";

// constants
import { PAGES_IDS } from '../constants';

const ContactPage = ({ page }) => {
  console.log(page);

  return (
    <>
      <Seo title={page.seoTitle} description={page.description}/>
      <Layout>
        <Contact />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const page = await client.getPage(PAGES_IDS.CONTACT);
  return {
    props: {
      page: page.fields,
    },
  }
}


export default ContactPage;

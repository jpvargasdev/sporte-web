import React from 'react';

// components
import Layout from '../components/Elements/Layout';
import Seo from '../components/Base/Seo';

// api
import * as client from '../api';

// templates
import About from '../templates/About';

// constants
import { PAGES_IDS } from '../constants';

const AboutPage = ({ page }) => (
  <>
    <Seo title={page.seoTitle} description={page.description} />
    <Layout useBackground={false}>
      <About content={page.content} />
    </Layout>
  </>
);

export async function getStaticProps() {
  const page = await client.getPage(PAGES_IDS.ABOUT);
  return {
    props: {
      page: page.fields,
    },
  };
}

export default AboutPage;

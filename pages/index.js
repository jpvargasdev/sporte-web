import Reaact, { useEffect, useState } from 'react'

// components
import Layout from "../components/Elements/Layout";
import Seo from "../components/Base/Seo";

// api
import * as client from '../api';

// templates
import Home from "../templates/Home";

// constants
import { PAGES_IDS } from '../constants';

const HomePage = ({ page }) => {
  async function fetchEntries() {
    const entries = await client.getAllArticles()
    if (entries.items) {
      return entries.items;
    }
    console.log(`Error getting Entries for articles.`)
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <>
      <Seo title={page.seoTitle} description={page.description}/>
      <Layout>
        <Home structure={page.structure} cards={posts}/>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const page = await client.getPage(PAGES_IDS.HOME);
  return {
    props: {
      page: page.fields,
    },
  }
}


export default HomePage;

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// components
import Layout from "../components/Elements/Layout";
import Seo from "../components/Base/Seo";

// template
import Article from '../templates/Article';

// api
import * as client from '../api';

// constants
import { PAGES_IDS } from '../constants';

const Post = ({ page, query }) => {
  const {
    query: { id },
  } = useRouter();
  async function fetchEntries() {
    const article = await client.getArticleById(id)
    if (article.fields) return article.fields;
    console.log(`Error getting Article`);
  }

  const [post, setPost] = useState(null);

  useEffect(() => {
    async function getPosts() {
      const post = await fetchEntries()
      setPost(post)
    }
    getPosts()
  }, [])

  if (!post) return null;

  return (
    <>
      <Seo title={page.seoTitle} description={page.description}/>
      <Layout>
        <Article structure={page.structure} data={post} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const page = await client.getPage(PAGES_IDS.ARTICLE);
  return {
    props: {
      page: page.fields,
    },
  }
}

export default Post;

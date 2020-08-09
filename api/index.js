const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});


export function getPage(pageName) {
  return client.getEntry(pageName);
}

export function getAllArticles() {
  return client.getEntries({
    content_type: 'article',
  });
}

export function getArticleById(id) {
  return client.getEntry(id);
}

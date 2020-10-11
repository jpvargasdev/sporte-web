import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

function SEO({
  description, lang = 'es', meta, title,
}) {
  const metaDescription = description;

  return (
    <Head>
      <title>{title}</title>
      <meta name="distribution" content="global" />
      <meta httpEquiv="Content-Language" content={lang} />
      <meta property="description" content={metaDescription} key="description" />
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={metaDescription} key="metadescription" />
      <meta property="og:type" content="website" key="type" />
      <meta property="twitter:card" content="summary" key="card" />
      <meta property="twitter:title" content={title} key="ttitle" />
      <meta property="twitter:description" content={metaDescription} key="tdescription" />
      <meta name="Robots" content="all" />
      <script data-ad-client="ca-pub-7707481234354209" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    </Head>
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;

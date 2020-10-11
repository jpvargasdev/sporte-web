import React, { memo, useEffect } from 'react';

// firebase
import getFirebase from '../../firebase.config';

// components
import renderRichText from '../../components/Base/RichText';
import AuthorCard from '../../components/Elements/cards/AuthorCard';
import PublicityBanner, { BANNER_SIZE } from '../../components/Base/PublicityBanner';
import WidgetFabric from '../../components/Helpers/WidgetFabric';
import Share from '../../components/Base/Share';

// styles
import './Article.module.scss';

let datastore = null;

const Article = ({ data, structure }) => {
  useEffect(() => {
    async function initFirebase() {
      datastore = await getFirebase();
      datastore.analytics().logEvent('user_joined', {
        page: 'article',
        title: data.title || '',
      });
    }
    initFirebase();
  }, []);

  if (!data.content) return null;
  const ContentText = renderRichText(data.content);
  const { widget } = structure.page[0];

  return (
    <>
      <div className="article article_container">

        <div className="article article_banner_container">
          <PublicityBanner type={BANNER_SIZE.PORTRAIT} />
        </div>
        <article className="article article_content">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div>
            <Share colorButton="primary" color="white" />
          </div>
          <div className="content_img">
            <img className="image_article" src={data.bannerImage.fields.file.url} alt={data.bannerImage.fields.file.title} />
          </div>
          <div className="contentText">
            {ContentText}
          </div>
          <Share colorButton="primary" color="white" />
          <AuthorCard data={data.author.fields} />
        </article>

        <div className="article article_banner_container">
          <PublicityBanner className="article article_banner" type={BANNER_SIZE.PORTRAIT} />
        </div>

        <div className="recomendation_article">
          {data.recomendations && (
            <WidgetFabric data={data.recomendations} {...widget} />
          )}
        </div>
      </div>
    </>
  );
};

export default memo(Article);

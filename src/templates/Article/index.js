import React from "react";

//styles
import "./Article.scss";

// components
import renderRichText from "../../components/Base/RichText";
import AuthorCard from "../../components/Elements/cards/AuthorCard";
import PublicityBanner, { BANNER_SIZE } from "../../components/Base/PublicityBanner";
import WidgetFabric from "../../components/Helpers/WidgetFabric";

const Article = ({ data, structure }) => {
  const ContentText = renderRichText(data.content.json);
  const { widget } = structure.page[0];

  return (
    <>
      <div className="article article_container">

        <div className="article article_banner_container">
          <PublicityBanner className="article article_banner" type={BANNER_SIZE.PORTRAIT} />
        </div>

        <article className="article article_content">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div className="content_img">
            <img className="image_article" src={data.bannerImage.file.url} alt={data.bannerImage.file.title}/>
          </div>
          <div className="contentText">
            {ContentText}
          </div>
          <AuthorCard data={data.author} />
        </article>

        <div className="article article_banner_container">
          <PublicityBanner className="article article_banner" type={BANNER_SIZE.PORTRAIT} />
        </div>

      </div>
      <div className='recomendation_article'>
        {data.recomendations && (
          <WidgetFabric data={data.recomendations} { ...widget } />
        )}
      </div>
    </>
  );
};

export default Article;

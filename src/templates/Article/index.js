import React from "react";

//styles
import './Article.scss';

// components
import renderRichText from "../../components/Base/RichText";
import AuthorCard from "../../components/Elements/cards/AuthorCard";

const Article = ({ data }) => {
  const ContentText = renderRichText(data.content.json);
  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <div className='content_img'>
        <img className='image' src={data.bannerImage.file.url} alt={data.bannerImage.file.title}/>
      </div>
      <div className='contentText'>
        {ContentText}
      </div>
      <AuthorCard data={data.author} />
    </article>
  );
};

export default Article;

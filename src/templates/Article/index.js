import React from "react";

// components
import renderRichText from "../../components/Base/RichText";
import AuthorCard from "../../components/Elements/cards/AuthorCard";

const Article = ({ data }) => {
  const ContentText = renderRichText(data.content.json);
  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <img src={data.bannerImage.file.url} alt={data.bannerImage.file.title}/>
      {ContentText}
      <AuthorCard data={data.author} />
    </article>
  );
};

export default Article;

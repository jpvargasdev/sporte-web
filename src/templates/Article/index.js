import React from "react";
import { Row, Col } from 'antd';

//styles
import './Article.scss';

// components
import renderRichText from "../../components/Base/RichText";
import AuthorCard from "../../components/Elements/cards/AuthorCard";
import PublicityBanner from '../../components/Base/PublicityBanner'

const Article = ({ data }) => {
  const ContentText = renderRichText(data.content.json);
  return (
    <article>
       <Row gutter={[32, 16]} >
       <Col span={6} >
          <div className='public'>
           <PublicityBanner />
          </div>
        </Col>
        <Col span={12} >
          <div className='content_article'>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <div className='content_img'>
              <img className='image_article' src={data.bannerImage.file.url} alt={data.bannerImage.file.title}/>
            </div>
            <div className='contentText'>
              {ContentText}
            </div>
          </div>
      <AuthorCard data={data.author} />
        </Col>
        <Col span={6} >
          <div className='public'>
           <PublicityBanner />
          </div>
        </Col>
      </Row>
    </article>
  );
};

export default Article;

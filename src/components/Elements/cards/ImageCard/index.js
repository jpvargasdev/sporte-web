import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';

//style
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import './ImageCard.scss';

const { Meta } = Card;

const ImageCard = ({
  title,
  description,
  bannerImage,
}) => {
  return(
    <Card
      hoverable
      style={{ width: 240, margin: 10, boxShadow: 'green', }}
      cover={
        <img alt={bannerImage.title} src={bannerImage.file.url} />
      }>
      <Meta title={title} description={description} />
      <div className='button'>
        <Button type="primary" shape="circle">
          ir
        </Button>
      </div>
    </Card>
  );
};

ImageCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bannerImage: PropTypes.shape({
    title: PropTypes.string,
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
};

ImageCard.defaultProps = {
  title: "test",
  description: "test",
  bannerImage: {
    title: "test",
    file: {
      url: "test",
    },
  },
}

export default ImageCard;
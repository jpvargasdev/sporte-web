import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import Following from '../../../Base/Following';

// style
import './image-card.module.scss';

const { Meta } = Card;

const ImageCard = ({
  title,
  description,
  bannerImage,
  linkHandler,
}) => (
  <Card
    onClick={linkHandler}
    hoverable
    className="card_img"
    cover={
      <img alt={bannerImage.fields.title} src={bannerImage.fields.file.url} />
      }
  >
    <Meta title={title} description={description} />
    <Following props="white" />
  </Card>
);

ImageCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bannerImage: PropTypes.shape({
    fields: PropTypes.shape({
      title: PropTypes.string,
      file: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }),
  linkHandler: PropTypes.func.isRequired,
};

ImageCard.defaultProps = {
  title: 'test',
  description: 'test',
  bannerImage: {
    title: 'test',
    file: {
      url: 'testel c',
    },
  },
};

export default ImageCard;

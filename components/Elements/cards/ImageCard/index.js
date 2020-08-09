import React from 'react';
import PropTypes from 'prop-types';
import { Card} from 'antd';
import Following from "../../../Base/Following";

//style
import './image-card.module.scss';

const { Meta } = Card;

const ImageCard = ({
  title,
  description,
  bannerImage,
  linkHandler
}) => {
  return(
    <Card
      onClick={linkHandler}
      hoverable
      style={{ width: 240, margin: 10, boxShadow: 'green', borderRadius:5, }}
      cover={
        <img alt={bannerImage.title} src={bannerImage.file.url} />
      }>
      <Meta title={title} description={description} />
      <Following props='white'/>
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
  linkHandler: PropTypes.func,
};

ImageCard.defaultProps = {
  title: "test",
  description: "test",
  bannerImage: {
    title: "test",
    file: {
      url: "testel c",
    },
  },
}

export default ImageCard;
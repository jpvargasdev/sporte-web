import React from 'react';
import PropTypes from 'prop-types';

// style
import './story-card.module.scss';

// Components
import Following from '../../../Base/Following';

const StoryCard = ({
  bannerImage,
  title,
  linkHandler,

}) => (
  <div className="cardh__image" onClick={linkHandler}>
    <img className="image" src={bannerImage.file.url} alt={bannerImage.title} />
    <div className="card__title">
      <h3>{title}</h3>
      <Following props="white" />
    </div>
  </div>
);

StoryCard.propTypes = {
  title: PropTypes.string,
  bannerImage: PropTypes.shape({
    title: PropTypes.string,
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  linkHandler: PropTypes.func,
};

StoryCard.defaultProps = {
  title: 'test',
  bannerImage: {
    title: 'test',
    file: {
      url: 'testel c',
    },
  },
};

export default StoryCard;

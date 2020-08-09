import React from 'react';
import PropTypes from 'prop-types';

// style
import './rectangle-card.module.scss';

// component
import Following from '../../../Base/Following';

const CardWidth = ({
  bannerImage,
  title,
  linkHandler,

}) => (
  <div className="cardw__image" onClick={linkHandler}>
    <img className="image" src={bannerImage.file.url} alt={bannerImage.title} />
    <div className="card__title">
      <h3>{title}</h3>
      <Following props="white" />
    </div>
  </div>
);

CardWidth.propTypes = {
  title: PropTypes.string,
  bannerImage: PropTypes.shape({
    title: PropTypes.string,
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  linkHandler: PropTypes.func,
};

CardWidth.defaultProps = {
  title: 'test',
  bannerImage: {
    title: 'test',
    file: {
      url: 'testel c',
    },
  },
};

export default CardWidth;

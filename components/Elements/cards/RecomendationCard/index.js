import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import { Card } from 'antd';

// styles
import './recomendation-card.module.scss';

const RecomendationCard = ({
  bannerImage,
  title,
  linkHandler,
}) => (
  <Card
    onClick={() => {
      linkHandler();
    }}
    className="recomendation"
  >
    <img className=" recoment_img" src={bannerImage.fields.file.url} alt={bannerImage.fields.title} />
    <div className=" recoment_p">
      <h6>{title}</h6>
    </div>
  </Card>
);

RecomendationCard.propTypes = {
  description: PropTypes.string,
  bannerImage: PropTypes.shape({
    title: PropTypes.string,
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  linkHandler: PropTypes.func,
};

RecomendationCard.defaultProps = {
  title: 'test',
  bannerImage: {
    title: 'test',
    file: {
      url: 'testel c',
    },
  },
};

export default RecomendationCard;

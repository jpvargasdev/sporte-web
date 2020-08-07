import React from 'react';
import PropTypes from "prop-types";

//style
import "antd/dist/antd.css";

// components
import { Carousel } from 'antd';
import CardClient from '../../cards/CardClient'

const ClientWidgets = ({ cards }) => {
  return (
    <Carousel autoplay>
      {
        cards.map(
          card => (
            <CardClient
              img={card.bannerImage}
              title={card.title}
              key={card.id}
              linkHandler={card.linkHandler}
            />
          )
        )}
    </Carousel>
  );
};

ClientWidgets.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

export default ClientWidgets;

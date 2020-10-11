/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

import './grid.module.scss';
import ImageCard from '../../cards/ImageCard';

const Grid = ({
  cards,
}) => {
  return (
    <section className="container_grid">
      {
        cards.map((card, index) => (
          <div key={index} className="List_card">
            <ImageCard linkHandler={card.linkHandler} {...card.fields} />
          </div>
        ))
      }
    </section>
  );
};

export default Grid;

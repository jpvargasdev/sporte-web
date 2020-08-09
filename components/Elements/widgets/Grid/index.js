import React from 'react';
import PropTypes from 'prop-types';

import './grid.module.scss';
import ImageCard from '../../cards/ImageCard';

const Grid = ({
  cards
}) => {
  return(
    <section className='container_grid'>
      {
        cards.map((card, index) => 
          <div key={index} className='List_card'>
            <ImageCard  {...card} />
          </div>
        )
      }
    </section>
  )
} 

export default Grid;

Grid.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
      }),
      meta: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      }),
    }),
  ),
};
import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../../Base/Title'
import './Grid.scss';
import ImageCard from '../../cards/ImageCard';

const ListCard = [
  {
    img: {
      src:"http://lorempixel.com/g/300/300",
      alt:"example",
    },
    meta:{
      title:"Europe Street beat",
      description:" description ",
    }
  },
  {
    img: {
      src:"http://lorempixel.com/g/300/300",
      alt:"example",
    },
    meta:{
      title:"Europe Street beat",
      description:" description ",
    }
  },
  {
    img: {
      src:"http://lorempixel.com/g/300/300",
      alt:"example",
    },
    meta:{
      title:"Europe Street beat",
      description:" description ",
    }
  },
  {
    img: {
      src:"http://lorempixel.com/g/300/300",
      alt:"example",
    },
    meta:{
      title:"Europe Street beat",
      description:" description ",
    }
  },
  {
    img: {
      src:"http://lorempixel.com/g/300/300",
      alt:"example",
    },
    meta:{
      title:"Europe Street beat",
      description:" description ",
    }
  },
  {
    img: {
      src:"http://lorempixel.com/g/300/300",
      alt:"example",
    },
    meta:{
      title:"Europe Street beat",
      description:" description ",
    }
    },         
]

const Grid = ({
  cards
}) => {
  return(
    <>
      <Title text={'Tarjetas'} />
      <section className='container_grid'>
        {
          ListCard.map(card => 
          <div className='List_card'>
            <Card {...card} />
          </div> 
          )
        }
      </section>
    </>
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
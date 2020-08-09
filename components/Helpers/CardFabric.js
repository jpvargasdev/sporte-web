import React from 'react';

// components
import {
  ImageCard,
  AuthorCard,
  RectangleCard,
  StoryCard,
  ClientBanner,
} from '../Elements/cards';

// constants
const cardsMap = {
  imageCard: ImageCard,
  authorCard: AuthorCard,
  rectangleCard: RectangleCard,
  storyCard: StoryCard,
  ClientBanner,
};

const CardFabric = ({ type, data }) => {
  const Card = cardsMap[type];
  return (
    <Card {...data} />
  );
};

export default CardFabric;

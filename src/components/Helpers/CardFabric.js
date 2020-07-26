import React from "react";

// components
import {
  ImageCard,
  AuthorCard,
  RectangleCard,
  StoryCard,
} from "../Elements/cards";

// constants
const cardsMap = {
  imageCard: ImageCard,
  authorCard: AuthorCard,
  rectangleCard: RectangleCard,
  storyCard: StoryCard,
};

const CardFabric = ({type, data}) => {
  const Card = cardsMap[type];
  return (
    <Card {...data} />
  );
};

export default CardFabric;

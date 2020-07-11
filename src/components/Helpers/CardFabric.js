import React from "react";

// components
import { ImageCard, AuthorCard } from "../Elements/cards";
const cardsMap = {
  imageCard: ImageCard,
  authorCard: AuthorCard,
};

const CardFabric = ({type, data}) => {
  const Card = cardsMap[type];
  return (
    <Card {...data} />
  );
};

export default CardFabric;

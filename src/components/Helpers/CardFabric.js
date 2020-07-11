import React, { memo } from "react";

// components
import { ImageCard, AuthorCard } from "../Elements/cards";
const cardsMap = {
  imageCard: ImageCard,
  authorCard: AuthorCard,
};

const CardFabric = ({type, data}) => {
  const Card = card[type];
  return <Card {...data} />
};

export default memo(CardFabric);

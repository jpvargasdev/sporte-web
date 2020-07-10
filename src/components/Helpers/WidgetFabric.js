import React from "react";

// components
import Grid from "../Elements/widgets/Grid";
import Carousel from "../Elements/widgets/Carousel";

const widgetMap = {
  grid: Grid,
  carousel: Carousel,
};

const WidgetFabric = ({type, data}) => {
  const Widget = widgetMap[type];
  return <Widget cards={data} />
};

export default WidgetFabric;

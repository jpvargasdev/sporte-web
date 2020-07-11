import React from "react";

// components
import Grid from "../Elements/widgets/Grid";
import Carousel from "../Elements/widgets/Carousel";
import Title from "../Base/Title";

const widgetMap = {
  grid: Grid,
  carousel: Carousel,
};

const WidgetFabric = ({type, data, title}) => {
  const Widget = widgetMap[type];
  return (
    <>
      <section>
      <Title text='Tarjetas'/>
        <Widget cards={data} />
      </section>
    </>
  );
};

export default WidgetFabric;

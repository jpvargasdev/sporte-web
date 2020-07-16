import React from "react";

// components
import Grid from "../Elements/widgets/Grid";
import Carousel from "../Elements/widgets/Carousel";
import PublicityBanner from "../Base/PublicityBanner";
import Title from "../Base/Title";

const widgetMap = {
  grid: Grid,
  carousel: Carousel,
  publicityBanner: PublicityBanner,
};

const WidgetFabric = ({type, data, title}) => {
  const Widget = widgetMap[type];
  return (
    <>
      <section>
      { title && <Title text={title}/> }
        <Widget cards={data} />
      </section>
    </>
  );
};

export default WidgetFabric;

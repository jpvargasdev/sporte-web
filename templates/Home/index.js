import React from "react";

//Components
import WidgetFabric from "../../components/Helpers/WidgetFabric";

// utils
import { shapeContent } from "../../utils/formatters";

const Home = ({
  structure,
  cards,
}) => {
  const widgetsData = shapeContent(structure, cards);
  return(
    <>
      {widgetsData.map((widgetData, index) => (
        <WidgetFabric { ...widgetData } key={index}/>
      ))}
    </>
  );
};

export default Home;

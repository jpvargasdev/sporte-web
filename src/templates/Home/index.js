import React from "react";

//Components
import WidgetFabric from "../../components/Helpers/WidgetFabric";

// utils
import { shapeContent } from "../../Utils/Formatters";

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

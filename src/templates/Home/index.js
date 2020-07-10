import React from "react";

//Components
import WidgetFabric from "../../components/Helpers/WidgetFabric";

function shapeContent(structure, cards) {
  const { page } = structure;
  const widgetsToRender = [];
  page.forEach(({ widget }) => {
    const data = [];
    for (let i = 0; i < widget.items ; i++) {
      if (cards.length > 0) {
        data.push(cards.shift());
      }
    }
    widgetsToRender.push({ type:widget.type, data:data });
  });

  return widgetsToRender;
}

const Home = ({
  structure,
  totalCount,
  cards,
}) => {
  console.log(cards);
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

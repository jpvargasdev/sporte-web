/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

// Components
import WidgetFabric from '../../components/Helpers/WidgetFabric';

// utils
import { shapeContent } from '../../utils/formatters';

const Home = ({
  structure,
  cards,
}) => {
  const widgetsData = shapeContent(structure, cards);
  return (
    <>
      {widgetsData.map((widgetData, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <WidgetFabric {...widgetData} key={index} />
      ))}
    </>
  );
};

export default Home;

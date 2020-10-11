/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { memo, useEffect } from 'react';

// Components
import WidgetFabric from '../../components/Helpers/WidgetFabric';

// firebase
import getFirebase from '../../firebase.config';

// utils
import { shapeContent } from '../../utils/formatters';

let datastore = null;

const Home = ({
  structure,
  cards,
}) => {
  const widgetsData = shapeContent(structure, cards);

  useEffect(() => {
    async function initFirebase() {
      datastore = await getFirebase();
      datastore.analytics().logEvent('user_joined', {
        page: 'home',
      });
    }
    initFirebase();
  }, []);

  return (
    <>
      {widgetsData.map((widgetData, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <WidgetFabric {...widgetData} key={index} />
      ))}
    </>
  );
};

export default memo(Home);

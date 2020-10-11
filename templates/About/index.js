import React, { memo, useEffect } from 'react';

// firebase
import getFirebase from '../../firebase.config';

// components
import renderRichText from '../../components/Base/RichText';

// styles
import './About.module.scss';

let datastore = null;

const About = ({ content }) => {
  const ContentText = renderRichText(content);
  useEffect(() => {
    async function initFirebase() {
      datastore = await getFirebase();
      datastore.analytics().logEvent('user_joined', {
        page: 'about',
      });
    }
    initFirebase();
  }, []);

  return (
    <section className="about">
      {ContentText}
    </section>
  );
};

export default memo(About);

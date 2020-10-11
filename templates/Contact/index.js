import React, { memo, useEffect } from 'react';
import './Contact.module.scss';

// firebase
import getFirebase from '../../firebase.config';

// components
import ContactBanner from '../../components/Elements/ContactBanner';

let datastore = null;

function Contact() {
  useEffect(() => {
    async function initFirebase() {
      datastore = await getFirebase();
      datastore.analytics().logEvent('user_joined', {
        page: 'contact',
      });
    }
    initFirebase();
  }, []);

  return (
    <section className="contact">
      <ContactBanner />
    </section>
  );
}

export default memo(Contact);

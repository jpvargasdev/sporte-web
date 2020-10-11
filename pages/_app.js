import React from 'react';
import '../styles/index.scss';
import 'antd/dist/antd.css';

import getFirebase from '../firebase.config';

function MyApp({ Component, pageProps }) {
  getFirebase();
  return <Component {...pageProps} />;
}

export default MyApp;

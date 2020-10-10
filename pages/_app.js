import React from 'react';
import '../styles/index.scss';
import 'antd/dist/antd.css';
import loadDb from '../firebase.config';

function MyApp({ Component, pageProps }) {
  loadDb();
  return <Component {...pageProps} />;
}

export default MyApp;

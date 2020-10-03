import React from 'react';
import PropTypes from 'prop-types';
import { Layout, BackTop } from 'antd';

//  components
import Header from '../Header';
import HeaderSub from '../HeaderSub';
import ButtonFloat from '../../Base/ButtonFloat';
import Footer from '../Footer';
import './layout.module.scss';

const { Content } = Layout;

const mLayout = ({ children, useBackground = true }) => {
  let styleContainer = '';
  if (useBackground) styleContainer = 'site-layout-content';
  return (
    <Layout className="layout">
      <Header />
      <HeaderSub />
      <Content className="site-layout-background" style={{ marginTop: '1em' }}>
        <main className={styleContainer}>{children}</main>
      </Content>
      <BackTop>
        <ButtonFloat />
      </BackTop>
      <Footer />
    </Layout>
  );
};

mLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default mLayout;

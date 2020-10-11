import React from 'react';
import PropTypes from 'prop-types';
import { Layout, BackTop } from 'antd';

//  components
import Header from '../Header';
import ButtonFloat from '../../Base/ButtonFloat';
import Footer from '../Footer';
import './layout.module.scss';

const { Content } = Layout;

const mLayout = ({
  children,
  useBackground = true,
  hideMenuBar = false,
  hideMenuIcon = false,
  footerFixed = false,
}) => {
  let styleContainer = '';
  if (useBackground) styleContainer = 'site-layout-content';
  return (
    <Layout className="layout">
      <Header hideMenuBar={hideMenuBar} hideMenuIcon={hideMenuIcon} />
      <Content className="site-layout-background" style={{ marginTop: '4em' }}>
        <main className={styleContainer}>{children}</main>
      </Content>
      <BackTop>
        <ButtonFloat />
      </BackTop>
      <Footer footerFixed={footerFixed} />
    </Layout>
  );
};

mLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default mLayout;

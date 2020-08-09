import React from 'react';

import { Layout, Menu } from 'antd';

// style
import './header.module.scss';

const { Header } = Layout;

const mHeader = () => (
  <Header style={{
    position: 'fixed',
    zIndex: 1,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '6em',
  }}
  >
    <a href="/">
      <img src="/logo.png" alt="sporte logo" />
    </a>
    <Menu theme="light" mode="horizontal" style={{ height: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <Menu.Item key="1">
        <a href="/about/">
          Sobre Nosotros
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/contact/">
          Contacto
        </a>
      </Menu.Item>
    </Menu>
  </Header>
);

export default mHeader;

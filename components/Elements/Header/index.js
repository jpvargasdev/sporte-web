import React from 'react';

import { Layout, Menu } from 'antd';

// Components
import Link from 'next/link';

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
    <Link href="/">
      <img src="/logo.png" alt="sporte logo" />
    </Link>
    <Menu theme="light" mode="horizontal" style={{ height: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <Menu.Item key="1">
        <Link href="/about/">
          Sobre Nosotros
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/contact/">
          Contacto
        </Link>
      </Menu.Item>
    </Menu>
  </Header>
);

export default mHeader;

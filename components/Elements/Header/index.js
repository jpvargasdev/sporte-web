import React, { useState } from 'react';

import { Layout, Menu, Drawer } from 'antd';

// components
import MdMenu from 'react-ionicons/lib/MdMenu';

// style
import './header.module.scss';

const { Header } = Layout;

const mHeader = () => {
  const [header, setHeader] = useState(false);

  return (
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
      }}
      className="header"
    >
      <div className="header-horizontal">
        <a href="/">
          <img src="/logo.png" alt="sporte logo" />
        </a>
        <Menu
          theme="light"
          mode="horizontal"
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
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
      </div>
      <div className="header-vertical">
        <a href="/">
          <img src="/logo.png" alt="sporte logo" />
        </a>
        <button className="menu_icon" type="button" onClick={() => setHeader(true)}>
          <MdMenu fontSize="30px" />
        </button>
      </div>
      <Drawer
        placement="right"
        closable
        onClose={() => setHeader(false)}
        visible={header}
        className="drawer"
      >
        <div className="item-drawer">
          <a href="/about/" onClick={() => setHeader(false)}>
            Sobre Nosotros
          </a>
        </div>
        <div className="item-drawer">
          <a href="/contact/" onClick={() => setHeader(false)}>
            Contacto
          </a>
        </div>
      </Drawer>
    </Header>
  );
};

export default mHeader;

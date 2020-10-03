import React, { useState } from 'react';

import { Layout, Drawer } from 'antd';

// components
import MdMenu from 'react-ionicons/lib/MdMenu';

// style
import './header.module.scss';

const { Header } = Layout;

const mHeader = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
      <div className="logo">
        <a href="/">
          <img src="/logo.png" alt="sporte logo" />
        </a>
      </div>
      <div className="header-vertical">
        <div className="content_menu">
          <button className="menu_icon" type="button" onClick={() => setHeader(true)}>
            <MdMenu fontSize="30px" />
          </button>
        </div>
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

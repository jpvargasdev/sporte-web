import React, { useState } from 'react';

import { Layout, Drawer } from 'antd';

// components
import MdMenu from 'react-ionicons/lib/MdMenu';

// style
import './header.module.scss';

const { Header } = Layout;

const mHeader = ({ hideMenuBar, hideMenuIcon }) => {
  const [isHeaderOpen, setHeader] = useState(false);

  return (
    <header className="header">
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
        }}
        className="header"
      >
        <div className="header-vertical">
          {!hideMenuIcon ? (
            <button className="menu_icon" type="button" onClick={() => setHeader(true)}>
              <MdMenu fontSize="25px" />
            </button>
          ) : (
            <div style={{ width: 70 }} />
          )}
          <a href="/">
            <img src="/logo.png" alt="sporte logo" />
          </a>
          <div style={{ width: '50px' }} />
        </div>
        <Drawer
          placement="left"
          closable
          onClose={() => setHeader(false)}
          visible={isHeaderOpen}
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
      {/* {!hideMenuBar && (
        <Header
          style={{
            zIndex: 1,
            width: '100%',
          }}
          className="header-menu"
        >
        </Header>
      )} */}
    </header>
  );
};

export default mHeader;

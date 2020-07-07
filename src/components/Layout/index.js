import React from "react";
import PropTypes from "prop-types";

//  components
import Header from "../Header";
import Footer from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

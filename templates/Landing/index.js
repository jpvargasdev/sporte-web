/* eslint-disable react/button-has-type */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// components
import renderRichText from '../../components/Base/RichText';

// style
import './Landing.scss';

function Landing({ content }) {
  const Content = renderRichText(content);
  return (
    <>
      <section className="landing">
        <div className="landing-container">
          <h1>let go</h1>
          <p>{Content}</p>
          <div className="input-container`">
            {/* <input>Enter your email here*</input> */}
            <input className="input-container input-container-input" type="email" id="email" placeholder="ingresa tu correo" />
            <button className="input-container input-container-button">Unirse</button>
          </div>
        </div>
      </section>
      <img
        src="/background-landing.jpg"
        alt="sporte background"
        className="landing-background"
      />
    </>
  );
}

Landing.propTypes = {
};

export default memo(Landing);

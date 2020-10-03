/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// component
import { DownOutlined } from '@ant-design/icons';

// style
import './drop-down-button.module.scss';
/**
 * @param {down} array
*/

const DropDownButton = ({ text, down }) => {
  const [active, setActive] = useState(false);
  const toggle = () => setActive(!active);
  return (
    <div className="drop">
      <button className="dropbutton" onClick={toggle}>
        {text}
        <DownOutlined style={{ fontSize: '13px' }} className={active ? 'icon icon-active' : 'icon icon-inactive'} />
      </button>
      { active
        && (
        <ul className="dropdown">
          {
            down.map(({ key, textdown, href }) => (
              <a className="dropdown dropdown-a" key={key} href={href}>
                <li className="dropdown dropdown-li">
                  <p className="dropdown dropdown-li-p">
                    {textdown}
                  </p>
                </li>
              </a>
            ))
          }
        </ul>
        )}
    </div>
  );
};

DropDownButton.propTypes = {
  text: PropTypes.string.isRequired,
  down: PropTypes.array.isRequired,
};

export default DropDownButton;

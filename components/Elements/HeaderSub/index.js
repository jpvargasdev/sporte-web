import React from 'react';
import PropTypes from 'prop-types';

// style
import './header-sub.module.scss';

// Component
import DropDownButton from '../../Base/DropDownButton';

const Items = [
  {
    Text: 'Fútbol',
    url: '#',
  },
  {
    Text: 'Natación',
    url: '#',
  },
  {
    Text: 'Tenis',
    url: '#',
  },
  {
    Text: 'Hockey',
    url: '#',
  },
  {
    Text: 'Voleibol',
    url: '#',
  },
];

const down = [
  {
    textdown: 'voleibol',
    href: '#',
  },
  {
    textdown: 'volol',
    href: '#',
  },
  {
    textdown: 'ibol',
    href: '#',
  },
  {
    textdown: 'v',
    href: '#',
  },
  {
    textdown: 'v',
    href: '#',
  },
  {
    textdown: 'v',
    href: '#',
  },
  {
    textdown: 'v',
    href: '#',
  },
];

const HeaderSub = () => (
  <div className="hsub">
    <div className="container">
      <ul className="container container-ul">
        {
        Items.map((item) => (
          <a className="a" href={item.href}>
            <li className="li" key={item}>
              {item.Text}
            </li>
          </a>
        ))
      }

      </ul>
      <DropDownButton
        text="Mas"
        className="lidrop"
        down={down}
      />
    </div>
  </div>
);

export default HeaderSub;

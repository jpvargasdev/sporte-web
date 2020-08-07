import React, { useState } from 'react';

//style 
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import './Header.scss';

// Components
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from "gatsby"
 
const Hamburguer = () => {
  const [isActive, setActive] = useState(true)
  const toggle = () => {
    setActive(!isActive)
  }

  return(
    <nav className='hamburguer' onClick={toggle}>
      <div className='menu'>
        {
          navContent.map(item =>
            <div key={item.text} className="hamburguer_button">
              <Link to={item.link}>
                <Button shape="round" style={{ width: '107%', height: 38}} type="text" {...item.props}>{item.text}</Button>
              </Link>
            </div>
          )
        }
      </div>
    </nav>
  )
}

const buttonType = "default";
 
const navContent = [
 {
    text: "Sobre nosotros",
    link: "/about/",
    props: {
      type: buttonType,
    }
  },
  {
    text: "Contacto",
    link: "/contact/",
    props: {
      type: buttonType,
    }
  },
];
 
const Header = () => {
  const [isActive, setActive] = useState(false)
  const toggle = () => {
    setActive(!isActive)
  }

  return(
    <header>
      <div className="container">
          <Link to='/'>
            <img src={require("../../../images/logo.jpeg")} alt="sporte logo" />
          </Link >
        <nav className='content_buttonicon'>
          {
            navContent.map(item =>
              <div key={item.text} className="nav_button">
                <Link to={item.link}>
                  <Button shape="round" {...item.props}>{item.text}</Button>
                </Link>
              </div>
            )
          }
        </nav>
        {isActive && <Hamburguer onClick={toggle} />}
        <div className='navegation_hamburger'>
          <Button style={{fontSize:13}} onClick={toggle} icon={<MenuOutlined />}/>
        </div>
      </div>
    </header> 
  )
}
 
export default Header;


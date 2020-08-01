import React from 'react';
// import PropTypes from "prop-types";
import IosAmericanFootball from 'react-ionicons/lib/IosAmericanFootball'
 
// Components
import { Button } from 'antd';
 
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import './Header.scss';
import { Link } from "gatsby"
 
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
 return(
   <header>
     <div className="container">
        <Link to='/'>
          <img src={require("../../../images/logo.jpeg")} alt="sporte logo" />
        </Link >
       <nav>
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
     </div>
   </header> 
 )
}
 
// Header.propTypes = {
//   logo: PropTypes.shape({
//     url: PropTypes.string,
//     alt: PropTypes.string
//   })
// };
// Header.defaultProps = {
//   logo: {
//     url: IconHeader,
//     alt: ""
//   }
// };
 
export default Header;


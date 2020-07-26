import React, { memo, useState, useEffect } from 'react';
import './ButtonFloat.scss';
// import PropTypes from 'prop-types';

//logo
import IosArrowRoundUp from 'react-ionicons/lib/IosArrowRoundUp'


const toggle = () => {
  window.scrollTo(0,0); 
}

const ButtonFloat = ({
  icon,
}) => {
  return (
    <div className='container_up'>
      <button className='buttom_up'>
        <IosArrowRoundUp onClick={toggle} fontSize="60px" color="#FFF" />
      </button>
    </div>
  );
}

// ButtonFloat.propTypes = {
//   icon: PropTypes.shape ({
//     url: PropTypes.string,
//     alt: PropTypes.string,
//   })
// }

// ButtonFloat.defaultProps = {
//   icon: {
//     url: Arrow,
//     alt: 'arrow'
//   }
// }

export default memo(ButtonFloat);
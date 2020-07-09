import React from 'react';
import './ButtonFloat.scss';
import PropTypes from 'prop-types';
import Arrow from '../../../images/arrow.png';

const ButtonFloat = ({icon}) => {

  // const [Click, setClick] = useState(false);

  return (
    <div className='container_up'>
      <button  className='buttom_up'>
        <img 
          src={icon.url}
          arl={icon.alt}
          className='icon-up'
        />
      </button>
    </div>
  );
}

ButtonFloat.propTypes = {
  icon: PropTypes.shape ({
    url: PropTypes.string,
    alt: PropTypes.string,
  })
}

ButtonFloat.defaultProps = {
  icon: {
    url: Arrow,
    alt: 'arrow'
  }
}

export default ButtonFloat;
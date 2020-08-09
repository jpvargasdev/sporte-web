import React, {memo} from 'react';
import PropTypes from 'prop-types';
import './title.module.scss';

const Title = ({
  text,
}) => {
  return(
    <div className='content_Title'>
      <h1 className='title'>{text}</h1>
    </div>
  )
};

Title.propTypes = {
  text: PropTypes.string,
}

export default memo(Title);
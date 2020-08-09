import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './title.module.scss';

const Title = ({
  text,
}) => (
  <div className="content_Title">
    <h3 className="title">{text}</h3>
  </div>
);

Title.propTypes = {
  text: PropTypes.string,
};

export default memo(Title);

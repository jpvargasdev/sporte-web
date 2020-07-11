import React from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar } from 'antd';

import './AuthorCard.scss';
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const { Meta } = Card;

const AuthorCard = ({ data }) => {
  return (
    <Card style={{ width: 300, marginTop: 16 }}>
    <Meta
      avatar={
        <Avatar size="large" src={data.profileImage.file.url}/>
      }
      title={data.name}
      description={data.description}
    />
    </Card>
  );
}

AuthorCard.propTypes = {
  data: PropTypes.shape({
    profileImage: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    name: PropTypes.string,
    description: PropTypes.string,
  })
};


export default AuthorCard;

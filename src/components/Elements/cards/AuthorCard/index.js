import React from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar } from 'antd';

//icons
import LogoFacebook from 'react-ionicons/lib/LogoFacebook'
import LogoInstagram from 'react-ionicons/lib/LogoInstagram'
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'

import './AuthorCard.scss';
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const { Meta } = Card;

const ImageIcon = [
  {
   Icons:LogoFacebook,
    text:'Fasebook',
  },
  {
   Icons:LogoInstagram,
    text:'instagram',
  },
  {
   Icons:LogoLinkedin,
    text:'Likedin',
  },
]

const AuthorCard = ({ data }) => {
  return (
    <Card style={{ width: '100%', marginTop: 16, borderRadius:5, }}>
    <Meta
      avatar={
        <div className='content_avatar'>
          <Avatar size="large" src={data.profileImage.file.url}/>
        </div>
      }
      title={data.name}
      description={data.description}
    />
      {
        ImageIcon.map(item => {
          const {Icons} =item;
          return<Icons key={item.text} onClick={() => alert('Hi!')} className='icons' fontSize="20px" color="black" />
        })
      }
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

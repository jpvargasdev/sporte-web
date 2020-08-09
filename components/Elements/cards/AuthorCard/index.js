import React from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar } from 'antd';

//icons
import LogoFacebook from 'react-ionicons/lib/LogoFacebook'
import LogoInstagram from 'react-ionicons/lib/LogoInstagram'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'

import './author-card.module.css';

const { Meta } = Card;

const ImageIcon = [
  {
    Icons: LogoFacebook,
    text: 'facebookUrl',
  },
  {
    Icons: LogoInstagram,
    text: 'instagramUrl',
  },
  {
    Icons: LogoTwitter,
    text: 'twitterUrl',
  },
]

const AuthorCard = ({ data }) => {
  return (
    <Card style={{ width: '100%', marginTop: 16, borderRadius:5 }} >
    <Meta
      avatar={
        <div className='content_avatar'>
          <Avatar size="large" src={data.profileImage.file.url} />
        </div>
      }
      title={data.name}
      description={data.description}
    />
     <div className='content_icons'>
      {
        ImageIcon.map(item => {
          const { Icons, text } = item;
          return (
           
              <a href={ data[text] } >
                <Icons key={item.text}  className='icons' fontSize="23px" color="black" />
              </a>
          )
        })
      }
      </div>
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
    link: PropTypes.string,
  })
};


export default AuthorCard;

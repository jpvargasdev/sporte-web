import React from 'react';
import PropTypes from 'prop-types'

//component

import { Button, Tooltip } from 'antd';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';
import IosMail from 'react-ionicons/lib/IosMail';
import LogoTwitter from 'react-ionicons/lib/LogoTwitter';

//styles
import './share.module.scss'

const Icons = [
  {
    Ios: LogoFacebook,
    text: 'facebook',
  },
  {
    Ios: IosMail,
    text:'mail',
  },
  {
    Ios: LogoTwitter,
    text: 'twitter',
  }
]

const Share = ({color, colorButton }) => {
  return(
    <div className='content_share'>
      <div className='span'>
          {
            Icons.map(item => {
              const {Ios} = item
              return(
                <span className='span_button'>
                  <Button type={colorButton} size='small' shape="circle" icon={<Ios style={{margin: 'auto'}} fontSize="18px" color={color} />} />
                </span>
              )
            })
          }
      </div>
    </div>
  )
}

Share.propTypes = {
  color: PropTypes.string,
  colorButton: PropTypes.string,

}

export default Share;
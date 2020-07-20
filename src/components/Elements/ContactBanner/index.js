import React from 'react';
import './ContactBanner.scss';
import { Input } from 'antd';
import { Button } from 'antd';
import { UserOutlined, MailOutlined, MessageOutlined } from '@ant-design/icons';

// icons
import IosPin from 'react-ionicons/lib/IosPin'
import IosMail from 'react-ionicons/lib/IosMail'
import IosCall from 'react-ionicons/lib/IosCall'



const Icons = [
  {
    Logoion: IosPin,
    text: 'carrera 84 bis #71-62',
  },
  {
    Logoion: IosMail,
    text: 'saravargas @hotmail.c',
  },
  {
    Logoion: IosCall,
    text: '+57 3194820133',
  },
  {
    Logoion: IosCall,
    text: '+57 3194820133',
  },
]

const ContactBanner = () => {
  return(
    <form>
      <div className='Tarjet1'>
        <h1>Get in Touch</h1>
        <div className='content_input'>
          <Input style={{width: 300}} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tu Nombre"  />
          <br />
          <br />
          <Input style={{width: 300}} prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email"  />
          <br />
          <br />
          <Input style={{width: 300}} prefix={< MessageOutlined className="site-form-item-icon" />}  placeholder="Mensaje"  />
        </div>
        <Button className='button' type="primary">Enviar</Button>
      </div>
      <div className='tarjet2'>
        <h2>Contact Us</h2>
        <div className='content_icon'>
          {
            Icons.map(item => {
              const {Logoion} = item;
              return (
                <div className='ion'>
                  <div className='logoin' >
                  <Logoion key={item} fontSize="27px" color="#5684B2 " />
                  </div>
                  <p>{item.text}</p>
                </div>  
              )
            })
          }
        </div>
      </div>
    </form>
  )
}

export default ContactBanner;
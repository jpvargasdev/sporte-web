import React from 'react';
import { Input, Button } from 'antd';

import { UserOutlined, MailOutlined, MessageOutlined } from '@ant-design/icons';

import './contact-banner.module.scss';

// icons
import IosMail from 'react-ionicons/lib/IosMail';
import IosCall from 'react-ionicons/lib/IosCall';

const Icons = [
  {
    Logoion: IosMail,
    text: 'sporteoficial@gmail.com',
  },
  {
    Logoion: IosCall,
    text: '+57 311 5441147',
  },
];

const ContactBanner = () => (
  <form>
    <div className="tarjet1">
      <h1>Get in Touch</h1>
      <div className="content_input">
        <Input style={{ width: 300 }} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tu Nombre" />
        <br />
        <br />
        <Input style={{ width: 300 }} prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
        <br />
        <br />
        <Input style={{ width: 300 }} prefix={<MessageOutlined className="site-form-item-icon" />} placeholder="Mensaje" />
      </div>
      <Button className="button" type="primary">Enviar</Button>
    </div>
    <div className="tarjet2">
      <h2>Contact Us</h2>
      <div className="content_icon">
        {
          Icons.map((item) => {
            const { Logoion } = item;
            return (
              <div className="ion">
                <div className="logoin">
                  <Logoion key={item} fontSize="27px" color="#5684B2 " />
                </div>
                <p>{item.text}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  </form>
);

export default ContactBanner;

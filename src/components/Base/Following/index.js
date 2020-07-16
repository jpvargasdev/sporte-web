import React from 'react';
import { Button } from 'antd';
import "antd/dist/antd.css";
import IosArrowForward from 'react-ionicons/lib/IosArrowForward';

import './Following.scss';


const Following = () => {
  return(
    <div className='button'>
      <Button type="link" shape="circle">
        <p className='text'>LEER MÁS</p>
        <IosArrowForward onClick={() => alert('Hi!')} className='logo' fontSize="15px" color="#1890ff" />
      </Button>
    </div>
  )
}

export default Following;
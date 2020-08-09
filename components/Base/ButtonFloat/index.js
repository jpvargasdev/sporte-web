import React, { memo } from 'react';

// logo
import IosArrowRoundUp from 'react-ionicons/lib/IosArrowRoundUp';

import './button-float.module.scss';

const ButtonFloat = () => (
  <div className="buttom_up">
    <IosArrowRoundUp fontSize="60px" color="#FFF" />
  </div>
);

export default memo(ButtonFloat);

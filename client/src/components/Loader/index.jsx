import React from 'react';

import {
  CustomSpinner,
  CustomIcon
} from './LoaderStyles';

const Loader = () => {
  return (
    <CustomSpinner indicator={<CustomIcon type="loading" spin />} />
  )
};

export default Loader;

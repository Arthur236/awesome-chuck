import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

import { StyledLayout } from '../Home/HomeStyles';
import Navbar from '../Navbar';

const NotFound = () => {
  return (
    <StyledLayout className="layout">
      <Navbar/>

      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary"><Link to='/'>Back Home</Link></Button>}
      />
    </StyledLayout>
  );
};

export default NotFound;

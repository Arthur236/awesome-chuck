import React from 'react';
import { Avatar, Menu } from 'antd';
import { BannerDescription, StyledHeader, StyledMenu } from './NavbarStyles';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <Avatar src="/images/chuck-norris.svg"/>
        <BannerDescription>Awesome Chuck</BannerDescription>
      </div>

      <StyledMenu theme="dark" mode="horizontal">
        <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
      </StyledMenu>
    </StyledHeader>
  );
};

export default Navbar;

import React, { Component } from 'react';
import { Avatar, Button, Layout, Menu } from 'antd';

import {
  StyledLayout,
  StyledMenu,
  StyledHeader,
  BannerDescription,
  ButtonWrapper,
  CustomOr
} from './HomeStyles';
import Categories from '../Categories';

const { Content, Footer } = Layout;

class Home extends Component {
  state = {};

  render() {
    return (
      <StyledLayout className="layout">
        <StyledHeader>
          <div className="logo">
            <Avatar src="/images/chuck-norris.svg"/>
            <BannerDescription>Awesome Chuck</BannerDescription>
          </div>

          <StyledMenu theme="dark" mode="horizontal">
            <Menu.Item key="1">Home</Menu.Item>
          </StyledMenu>
        </StyledHeader>

        <Content style={{ padding: '20px 50px' }}>
          <h2>Awesome Chuck Jokes</h2>

          <ButtonWrapper>
            <Button type="primary">Show Random Joke</Button>
            <Button type="primary">Search</Button>
          </ButtonWrapper>

          <CustomOr>&nbsp; Or &nbsp;</CustomOr>

          <h3>Select Category</h3>

          <Categories/>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Awesome Chuck ©2019 Created by Arthur Thungu
        </Footer>
      </StyledLayout>
    );
  }
}

export default Home;

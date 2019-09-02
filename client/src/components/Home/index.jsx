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
import JokeModal from '../JokeModal';
import RandomJokeModal from '../RandomJokeModal';
import SearchDrawer from '../SearchDrawer';

const { Content, Footer } = Layout;

class Home extends Component {
  state = {
    drawerVisible: false,
    jokeModal: {
      visible: false
    },
    modalId: null,
    placement: 'right',
    randomModal: {
      visible: false
    },
  };

  showModal = (id) => {
    this.setState({
      [`${id}Modal`]: {
        visible: true
      },
      modalId: id
    });
  };

  handleCancel = e => {
    const id = this.state.modalId;

    this.setState({
      [`${id}Modal`]: {
        visible: false
      },
      modalId: null
    });
  };

  showDrawer = () => {
    this.setState({
      drawerVisible: true,
    });
  };

  onClose = () => {
    this.setState({
      drawerVisible: false,
    });
  };

  render() {
    const { drawerVisible, jokeModal, placement, randomModal } = this.state;

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
            <Button type="primary" id="randomJokeBtn" onClick={() => this.showModal('random')}>Show Random Joke</Button>
            <Button type="primary" id="searchBtn" onClick={this.showDrawer}>Search</Button>
          </ButtonWrapper>

          <CustomOr>&nbsp; Or &nbsp;</CustomOr>

          <h3>Select Category</h3>

          <Categories showModal={this.showModal}/>

          <JokeModal
            modalId='joke'
            modalVisible={jokeModal.visible}
            handleCancel={this.handleCancel}
          />

          <RandomJokeModal
            modalId='random'
            modalVisible={randomModal.visible}
            handleCancel={this.handleCancel}
          />

          <SearchDrawer
            visible={drawerVisible}
            placement={placement}
            closable={false}
            onClose={this.onClose}
          />
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Awesome Chuck ©2019 Created by Arthur Thungu
        </Footer>
      </StyledLayout>
    );
  }
}

export default Home;

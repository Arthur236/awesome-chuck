import React, { Component } from 'react';
import { Button, Layout } from 'antd';

import {
  StyledLayout,
  ButtonWrapper,
  CustomOr
} from './HomeStyles';
import Categories from '../Categories';
import JokeModal from '../JokeModal';
import RandomJokeModal from '../RandomJokeModal';
import SearchDrawer from '../SearchDrawer';
import Navbar from '../Navbar';

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
        <Navbar/>

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

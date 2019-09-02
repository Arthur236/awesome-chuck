import React from 'react';
import expect from 'expect';
import { mount} from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import waitForExpect from 'wait-for-expect';

import RandomJokeModal, { FETCH_RANDOM_JOKE } from '../components/RandomJokeModal';
import LoadingContextProvider from '../contexts/LoadingContext';
import CategoryContextProvider from '../contexts/CategoryContext';

describe('RandomJokeModal Tests', () => {
  const mock = {
    request: {
      query: FETCH_RANDOM_JOKE
    },
    result: {
      data: {
        randomJoke: {
          icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          value: 'A funny joke'
        },
      },
    },
  };

  it('calls refetchData successfully', async () => {
    const handleCancelMock = jest.fn();

    const props = {
      modalId: 'random',
      modalVisible: true,
      handleCancel: handleCancelMock
    };

    const wrapper = mount(
      <MockedProvider mocks={[mock, mock]} addTypename={false}>
        <CategoryContextProvider>
          <LoadingContextProvider>
            <RandomJokeModal {...props}/>
          </LoadingContextProvider>
        </CategoryContextProvider>
      </MockedProvider>
    );

    await waitForExpect(() => {
      wrapper.update();

      const button = wrapper.find('Button').last();
      button.props().onClick();
      wrapper.update();

      expect(wrapper.find('Loader').length).toBe(1);
    });
  });

  it('calls handleCancel successfully', async () => {
    const handleCancelMock = jest.fn();

    const props = {
      modalId: 'joke',
      modalVisible: true,
      handleCancel: handleCancelMock
    };

    const wrapper = mount(
      <MockedProvider mocks={[mock, mock]} addTypename={false}>
        <CategoryContextProvider>
          <LoadingContextProvider>
            <RandomJokeModal {...props}/>
          </LoadingContextProvider>
        </CategoryContextProvider>
      </MockedProvider>
    );

    await waitForExpect(() => {
      wrapper.update();

      const button = wrapper.find('Button').first();
      button.props().onClick();
      expect(handleCancelMock.mock.calls.length).toBe(1);
    });
  });
});
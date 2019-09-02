import React from 'react';
import expect from 'expect';
import { mount} from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import waitForExpect from 'wait-for-expect';

import JokeModal, { FETCH_CATEGORY_JOKE } from '../components/JokeModal';
import LoadingContextProvider from '../contexts/LoadingContext';
import CategoryContextProvider from '../contexts/CategoryContext';

describe('Category Card Tests', () => {
  const mock = {
    request: {
      query: FETCH_CATEGORY_JOKE,
      variables: {
        category: 'animal'
      }
    },
    result: {
      data: {
        joke: {
          icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
          value: 'A funny joke'
        },
      },
    },
  };

  it('calls refetchData successfully', async () => {
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
            <JokeModal {...props}/>
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
            <JokeModal {...props}/>
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
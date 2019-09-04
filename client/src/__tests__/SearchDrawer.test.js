import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import waitForExpect from 'wait-for-expect';

import SearchDrawer, { SEARCH_JOKE } from '../components/SearchDrawer';
import LoadingContextProvider from '../contexts/LoadingContext';
import CategoryContextProvider from '../contexts/CategoryContext';

describe('SearchDrawer Tests', () => {
  const mock = {
    request: {
      query: SEARCH_JOKE,
      variables: {
        queryString: 'hat'
      }
    },
    result: {
      data: {
        searchJoke: {
          total: 1,
          results: [
            {
              id: '1000',
              icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
              value: 'A funny hat joke'
            }
          ]
        },
      },
    },
  };

  it('searches for a joke successfully', async () => {
    const onCloseMock = jest.fn();

    const props = {
      visible: true,
      placement: 'right',
      closable: false,
      onClose: onCloseMock
    };

    const wrapper = mount(
      <MockedProvider mocks={[mock, mock]} addTypename={false}>
        <CategoryContextProvider>
          <LoadingContextProvider>
            <SearchDrawer {...props}/>
          </LoadingContextProvider>
        </CategoryContextProvider>
      </MockedProvider>
    );

    const searchInput = wrapper.find('Search').find('input');
    searchInput.simulate('change', { target: { value: 'hat' } });

    wrapper.find('Search').find('Icon').props().onClick();

    await waitForExpect(() => {
      expect(wrapper.find('List').length).toBe(1);
    });
  });
});
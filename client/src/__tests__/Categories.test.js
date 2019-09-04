import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import waitForExpect from 'wait-for-expect';

import Categories, { FETCH_CATEGORIES } from '../components/Categories';
import LoadingContextProvider from '../contexts/LoadingContext';
import CategoryContextProvider from '../contexts/CategoryContext';

describe('Categories Tests', () => {
  const mocks = [{
    request: {
      query: FETCH_CATEGORIES
    },
    result: {
      data: {
        categories: [
          {
            'name': 'animal'
          },
          {
            'name': 'career'
          },
        ],
      },
    },
  }];

  it('should render loading state initially', () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <CategoryContextProvider>
          <LoadingContextProvider>
            <Categories/>
          </LoadingContextProvider>
        </CategoryContextProvider>
      </MockedProvider>
    );

    expect(wrapper.find('.anticon-loading').exists()).toBe(true);
  });

  it('should fetch categories successfully', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CategoryContextProvider>
          <LoadingContextProvider>
            <Categories/>
          </LoadingContextProvider>
        </CategoryContextProvider>
      </MockedProvider>
    );

    await waitForExpect(() => {
      wrapper.update();

      expect(wrapper.find('.ant-card').length).toBeGreaterThan(1);
    });
  });

  it('should show error correctly', async () => {
    const mock = [{
      request: {
        query: FETCH_CATEGORIES
      },
      error: new Error('Could not fetch categories'),
    }];

    const wrapper = mount(
      <MockedProvider mocks={mock} addTypename={false}>
        <CategoryContextProvider>
          <LoadingContextProvider>
            <Categories/>
          </LoadingContextProvider>
        </CategoryContextProvider>
      </MockedProvider>
    );

    await waitForExpect(() => {
      wrapper.update();

      expect(wrapper.find('p').html()).toContain('Could not fetch the categories');
    });
  });
});

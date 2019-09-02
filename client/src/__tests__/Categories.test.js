import React from 'react';
import expect from 'expect';
import { MockedProvider } from '@apollo/react-testing';
import { create } from 'react-test-renderer';
import waait from 'waait';

import Categories, { FETCH_CATEGORIES } from '../components/Categories';
import LoadingContextProvider from '../contexts/LoadingContext';
import CategoryContextProvider from '../contexts/CategoryContext';

describe('Categories Tests', () => {
  const mocks = [
    {
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
    },
  ];

  it('renders without error', () => {
    create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CategoryContextProvider>
          <LoadingContextProvider>
            <Categories/>
          </LoadingContextProvider>
        </CategoryContextProvider>
      </MockedProvider>,
    );
  });

  it('should render loading state initially', () => {
    const wrapper = create(
      <MockedProvider mocks={[]} addTypename={false}>
        <CategoryContextProvider>
          <LoadingContextProvider>
            <Categories/>
          </LoadingContextProvider>
        </CategoryContextProvider>
      </MockedProvider>
    );

    const tree = wrapper.toJSON();
    expect(tree.children[0].props.className).toContain('anticon-loading');
  });

  it('should fetch categories successfully', async () => {
    const wrapper = create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CategoryContextProvider>
          <LoadingContextProvider>
            <Categories/>
          </LoadingContextProvider>
        </CategoryContextProvider>
      </MockedProvider>
    );

    await waait(0);

    const tree = wrapper.toJSON();
    expect(tree.children[0].props.className).toContain('ant-card');
  });

  it('should show error correctly', async () => {
    const mock = [{
      request: {
        query: FETCH_CATEGORIES
      },
      error: new Error('Could not fetch categories'),
    }];

    const wrapper = create(
      <MockedProvider mocks={mock} addTypename={false}>
        <CategoryContextProvider>
          <LoadingContextProvider>
            <Categories/>
          </LoadingContextProvider>
        </CategoryContextProvider>
      </MockedProvider>
    );

    await waait(0);

    const tree = wrapper.toJSON();
    expect(tree.children[0]).toContain('Could not fetch the categories');
  });
});

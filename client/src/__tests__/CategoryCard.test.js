import React from 'react';
import expect from 'expect';
import { MockedProvider } from '@apollo/react-testing';
import { create } from 'react-test-renderer';
import waait from 'waait';

import CategoryCard from '../components/CategoryCard';
import LoadingContextProvider from '../contexts/LoadingContext';
import CategoryContextProvider from '../contexts/CategoryContext';

describe('Category Card Tests', () => {
  it('calls showModal successfully', () => {
    const showModalMock = jest.fn();
    const props = {
      category: {
        name: 'Animal'
      },
      showModal: showModalMock
    };

    const wrapper = create(
      <MockedProvider mocks={[]} addTypename={false}>
        <CategoryContextProvider>
          <LoadingContextProvider>
            <CategoryCard {...props}/>
          </LoadingContextProvider>
        </CategoryContextProvider>
      </MockedProvider>,
    );

    const instance = wrapper.toJSON();
    instance.props.onClick();
    expect(showModalMock.mock.calls.length).toBe(1);
  });
});
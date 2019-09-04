import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import waitForExpect from 'wait-for-expect';

import CategoryCard from '../components/CategoryCard';
import LoadingContextProvider from '../contexts/LoadingContext';
import CategoryContextProvider from '../contexts/CategoryContext';

describe('Category Card Tests', () => {
  it('calls showModal successfully', async () => {
    const showModalMock = jest.fn();
    const props = {
      category: {
        name: 'Animal'
      },
      showModal: showModalMock
    };

    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <CategoryContextProvider>
          <LoadingContextProvider>
            <CategoryCard {...props}/>
          </LoadingContextProvider>
        </CategoryContextProvider>
      </MockedProvider>
    );

    await waitForExpect(() => {
      wrapper.update();

      const categoryCard = wrapper.find('CategoryCard');
      categoryCard.simulate('click');
      expect(showModalMock.mock.calls.length).toBe(1);
    });
  });
});

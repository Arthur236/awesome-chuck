import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

import App from '../components/App';

describe('App Tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <MockedProvider mocks={[]} addTypename={false}>
        <App/>
      </MockedProvider>
    );

    expect(wrapper.length).toBe(1);
  });

  it('renders div wrapper', () => {
    const wrapper = shallow(
      <MockedProvider mocks={[]} addTypename={false}>
        <App/>
      </MockedProvider>
    );

    const myComponent = wrapper.dive().dive().dive().dive();

    expect(myComponent.find('.App').length).toBe(1);
  });
});

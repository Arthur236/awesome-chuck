import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

import App from '../components/App';

describe('App Tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <MockedProvider mocks={null} addTypename={false}>
        <App/>
      </MockedProvider>
    );

    expect(wrapper.length).toBe(1);
  });

  it('renders div wrapper', () => {
    const myComponent = shallow(
      <MockedProvider mocks={null} addTypename={false}>
        <App/>
      </MockedProvider>
    );

    const wrapper = myComponent.dive().dive().dive().dive();

    expect(wrapper.find('.App').length).toBe(1);
  });
});

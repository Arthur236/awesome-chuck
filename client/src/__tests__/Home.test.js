import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

import Home from '../components/Home';

describe('App Tests', () => {
  it('renders Home component successfully', () => {
    const wrapper = shallow(
      <MockedProvider mocks={null} addTypename={false}>
        <Home/>
      </MockedProvider>
    );

    expect(wrapper.length).toBe(1);
  });
});

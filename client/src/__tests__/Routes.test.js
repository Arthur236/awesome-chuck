import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

import Routes from '../components/Routes';

describe('Routes Tests', () => {
  it('renders Switch component', () => {
    const myComponent = shallow(
      <MockedProvider mocks={null} addTypename={false}>
        <Routes/>
      </MockedProvider>
    );

    const wrapper = myComponent.dive().dive().dive().dive();

    expect(wrapper.find('Switch').length).toBe(1);
  });
});

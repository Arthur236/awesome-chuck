import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

import Routes from '../components/Routes';

describe('Routes Tests', () => {
  it('renders Switch component', () => {
    const wrapper = shallow(
      <MockedProvider mocks={[]} addTypename={false}>
        <Routes/>
      </MockedProvider>
    );

    const myComponent = wrapper.dive().dive().dive().dive();

    expect(myComponent.find('Switch').length).toBe(1);
  });
});

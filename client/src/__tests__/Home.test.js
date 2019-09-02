import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Home from '../components/Home';

describe('Home Tests', () => {
  it('renders Home component successfully', () => {
    const wrapper = shallow(<Home/>);

    expect(wrapper.length).toBe(1);
  });

  it('calls showModal successfully', () => {
    const wrapper = shallow(<Home/>);

    const button = wrapper.find('#randomJokeBtn').first();
    button.props().onClick();
    expect(wrapper.state().randomModal.visible).toBe(true);
  });

  it('opens and closes the search drawer successfully', () => {
    const wrapper = shallow(<Home/>);

    const button = wrapper.find('#searchBtn').first();
    button.props().onClick();
    expect(wrapper.state().drawerVisible).toBe(true);
  });
});

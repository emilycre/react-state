import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('Renders an app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Changes color on selectColor event', () => {
    const wrapper = shallow(<App />);

    wrapper.instance().selectColor('green');
    expect(wrapper.state('color')).toEqual('green');
  });
});

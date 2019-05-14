import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker Component', () => {
  it('Renders a ColorPicker', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Changes color to salmon on button click', () => {
    const wrapper = shallow(<ColorPicker />);
    
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state('color')).toEqual('salmon');
  });
});

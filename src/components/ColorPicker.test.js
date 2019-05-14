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

  it('Changes color to yellow on button click', () => {
    const wrapper = shallow(<ColorPicker />);
    
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.state('color')).toEqual('yellow');
  });

  it('Changes color to blue on button click', () => {
    const wrapper = shallow(<ColorPicker />);
    
    wrapper.find('button').at(2).simulate('click');
    expect(wrapper.state('color')).toEqual('blue');
  });

  it('Changes div className based on selected color', done => {
    const wrapper = shallow(<ColorPicker />);
    
    wrapper.setState({ color: 'salmon' }, () => {
      expect(wrapper.find('div').at(0).hasClass('salmon')).toBeTruthy();
      done();
    });
  });
});

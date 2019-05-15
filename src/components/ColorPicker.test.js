import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  it('renders a ColorPicker', () => {
    const wrapper = shallow(<ColorPicker selectColorHandler={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('selects salmon on button click', () => {
    const selectColorHandler = jest.fn();
    const wrapper = shallow(<ColorPicker selectColorHandler={selectColorHandler} />);

    wrapper.find('button').at(0).simulate('click');

    expect(selectColorHandler).toHaveBeenCalledWith('salmon');
  });

  it('selects gold on button click', () => {
    const selectColorHandler = jest.fn();
    const wrapper = shallow(<ColorPicker selectColorHandler={selectColorHandler} />);

    wrapper.find('button').at(1).simulate('click');

    expect(selectColorHandler).toHaveBeenCalledWith('gold');
  });

  it('selects teal on button click', () => {
    const selectColorHandler = jest.fn();
    const wrapper = shallow(<ColorPicker selectColorHandler={selectColorHandler} />);

    wrapper.find('button').at(2).simulate('click');

    expect(selectColorHandler).toHaveBeenCalledWith('teal');
  });
});

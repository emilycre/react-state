import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('ColorDisplay component', () => {
  it('Renders a ColorDisplay', () => {
    const wrapper = shallow(<ColorDisplay color="#000000" />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import GenerateNumbers from '../GenerateNumbers';


const setup = (props) => {
  const defaultProps = {
    title: 'Test Number',
    numbers: '35',
    handleOnChange: () => {},
    errorMessages: 'This is an error message'
  };
  const wrapper = shallow(
    <GenerateNumbers {...props} {...defaultProps} />
  );

  return {
    wrapper,
  };
};


describe('Component - GenerateNumbers', () => {
  test('should render', () => {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});

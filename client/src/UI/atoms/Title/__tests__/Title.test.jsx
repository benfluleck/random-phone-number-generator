import React from 'react';

import { shallow } from 'enzyme';
import Title from '../Title';

const setup = (props) => {
  const wrapper = shallow(
    <Title {...props}>
      Test Title
    </Title>
  );

  return {
    wrapper,
  };
};


describe('Component - Button', () => {
  test('should render', () => {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});

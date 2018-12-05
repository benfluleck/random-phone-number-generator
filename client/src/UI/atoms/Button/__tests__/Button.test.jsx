import React from 'react';

import { shallow } from 'enzyme';
import Button from '../Button';

const setup = (props) => {
  const defaultProps = {
    onClick: () => { },
  };
  const wrapper = shallow(
    <Button {...props} {...defaultProps}>
      Test button
    </Button>
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

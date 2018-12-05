import React from 'react';

import { shallow } from 'enzyme';
import TableRow from '../TableRow';

const setup = (props) => {
  const defaultProps = {
    name: 'Testing',
    value: 32
  };
  const wrapper = shallow(
    <TableRow {...props} {...defaultProps} />
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

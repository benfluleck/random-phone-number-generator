import React from 'react';
import { shallow } from 'enzyme';

import Table from '../Table';
import TableRow from '../../../atoms/TableRow/TableRow';

const setup = (props) => {
  const defaultProps = {
    items: [
      {
        name: 'Row1',
        value: 35
      },
      {
        name: 'Row2',
        value: 15
      }
    ],
  };
  const wrapper = shallow(
    <Table {...props} {...defaultProps} />
  );

  return {
    wrapper,
  };
};


describe('Component - Table', () => {
  test('should render', () => {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBeTruthy();
  });
  test('should render 2 Table Rows', () => {
    const { wrapper } = setup();

    expect(wrapper.contains(<TableRow name="Row1" value={35} />)).toBeTruthy();
    expect(wrapper.contains(<TableRow name="Row2" value={15} />)).toBeTruthy();
  });
});

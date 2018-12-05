import React from 'react';
import { shallow } from 'enzyme';

import LoadingWrapper from '../LoadingWrapper';

const setup = (props) => {
  const wrapper = shallow(
    <LoadingWrapper {...props} />
  );

  return {
    wrapper,
  };
};


describe('Component - Loading Wrapper', () => {
  test('should render', () => {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});

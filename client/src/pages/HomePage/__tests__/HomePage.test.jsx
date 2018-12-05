import React from 'react';
import { shallow, mount } from 'enzyme';

import HomePage from '../HomePage';
import Title from '../../../UI/atoms/Title/Title';
import GenerateNumbers from '../Sections/GenerateNumbers';


const historyMock = { push: jest.fn() };

const setup = (props) => {
  const wrapper = shallow(
    <HomePage {...props} />
  );

  const mountedWrapper = mount(
    <HomePage {...props} />
  );

  return {
    wrapper,
    mountedWrapper,
  };
};


describe('Component - Home Page', () => {
  test('should render', () => {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
  test('should render a title', () => {
    const { wrapper } = setup();

    expect(wrapper.contains(<Title>Phone Number Generator</Title>)).toBeTruthy();
  });
  test('should render GeneratedNumber Component with props', () => {
    const { wrapper } = setup();

    const generatedWrapper = wrapper.setState({ numberOfPhonenumbers: '23', errorMessage: 'This is an error' });

    expect(generatedWrapper.find(GenerateNumbers).props().numbers).toEqual('23');
    expect(generatedWrapper.find(GenerateNumbers).props().title).toEqual('Please Enter Number of Phone Numbers');
  });
  test('should toggle Checkbox click', () => {
    const { mountedWrapper } = setup();

    const handletoggleCheckboxSpy = jest.spyOn(
      mountedWrapper.instance(),
      'toggleCheckbox'
    );

    mountedWrapper.instance().toggleCheckbox();
    expect(handletoggleCheckboxSpy).toHaveBeenCalledTimes(1);
  });

  test('should simulate onchange if input is changed', () => {
    const { mountedWrapper } = setup();

    mountedWrapper.find('input').first().simulate('change', { target: { value: '24' } });

    expect(mountedWrapper.state('numberOfPhonenumbers')).toEqual('24');
  });

  test('should simulate click button and return error message with no input', () => {
    const { mountedWrapper } = setup({ history: historyMock });

    const mockEvent = { preventDefault: jest.fn() };

    mountedWrapper.find('button').simulate('click', mockEvent);

    expect(mountedWrapper.state('errorMessage').numberOfPhonenumbers).toEqual('Your number needs to be higher than 1');
  });
  test('should simulate click button is clicked', () => {
    const { mountedWrapper } = setup({ history: historyMock });

    const mockEvent = { preventDefault: jest.fn() };

    mountedWrapper.setState({ isChecked: true, numberOfPhonenumbers: '45' });
    mountedWrapper.find('button').simulate('click', mockEvent);

    expect(mountedWrapper.state('errorMessage')).toEqual({});
  });
});

import React from 'react';
import { shallow, mount } from 'enzyme';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ResultsPage from '../ResultsPage';
import LoadingWrapper from '../../../UI/atoms/LoadingWrapper/LoadingWrapper';
import Title from '../../../UI/atoms/Title/Title';
import Button from '../../../UI/atoms/Button/Button';


const historyMock = { push: jest.fn() };

const setup = (props) => {
  const wrapper = shallow(
    <ResultsPage {...props} />
  );

  const mountedWrapper = mount(
    <ResultsPage {...props} />
  );

  return {
    wrapper,
    mountedWrapper,
  };
};


describe('Component - Results Page when isLoading is true', () => {
  test('should render', () => {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBeTruthy();
  });
  test('should render a Loading Wrapper when isLoading is true', () => {
    const { wrapper } = setup();

    expect(wrapper.contains(<LoadingWrapper />)).toBeTruthy();
  });
  describe('Component - Results Page when isLoading is false', () => {
    const { wrapper } = setup();
    const resultsWrapper = wrapper.setState({ isLoading: false });


    test('should render Page when isLoading is false', () => {
      expect(resultsWrapper).toMatchSnapshot();
      expect(resultsWrapper.exists()).toBeTruthy();
    });
    test('should render Page with a Title', () => {
      expect(wrapper.contains(<Title>Latest Generated File Info.</Title>)).toBeTruthy();
    });
    test('should render two Buttons', () => {
      expect(wrapper.find(Button).length).toEqual(2);
    });
    test('should render first button with text download', () => {
      expect(wrapper.find(Button).first().props().children).toEqual('Download File');
    });
    test('should ha Redirect', () => {
      const { mountedWrapper } = setup({ history: historyMock });
      const mountedResultWrapper = mountedWrapper.setState({ isLoading: false });

      const handleRedirectSpy = jest.spyOn(
        mountedResultWrapper.instance(),
        'handleRedirect'
      );

      mountedResultWrapper.instance().handleRedirect();
      expect(handleRedirectSpy).toHaveBeenCalledTimes(1);
    });

    test('should call componentDidMount', () => {
      const { mountedWrapper } = setup({ history: historyMock });
      const mountedResultWrapper = mountedWrapper.setState({ isLoading: false });

      const mock = new MockAdapter(axios);
      const componentDidMountSpy = jest.spyOn(
        mountedResultWrapper.instance(),
        'componentDidMount'
      );

      mountedResultWrapper.instance().componentDidMount();

      mock.onGet().replyOnce(
        200,
        { res: { response: { data: '', link: '' } } }
      );
      expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    });

    test('should call handle Download action', () => {
      const { mountedWrapper } = setup({ history: historyMock });

      const mountedResultWrapper = mountedWrapper.setState({ isLoading: false });

      const mockEvent = { preventDefault: jest.fn() };

      mountedResultWrapper.find('button').first().simulate('click', mockEvent);

      expect(mountedResultWrapper.text()).toEqual('Latest Generated File Info.');
    });
  });
});

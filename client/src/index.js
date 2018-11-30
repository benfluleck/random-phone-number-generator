import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import GeneratePhoneNumbers from './Section/GeneratePhoneNumbers'

import './styles/global.css';


export const App = () => (
  <App.Container>
    <App.InnerContainer>
      <p className="is-size-2">
        Phone Number Generator
        </p>
      <GeneratePhoneNumbers />
    </App.InnerContainer>
  </App.Container>
);

App.Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
`

App.InnerContainer = styled.div`
  padding-top: 20rem;
`


render(<App />, document.getElementById('app'));

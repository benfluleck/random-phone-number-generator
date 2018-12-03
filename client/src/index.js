import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components';

import BaseRoutes from './pages'

import './assets/styles/global.css';


const App = () => (
  <App.Container>
    <App.InnerContainer>
      <Router>
        <BaseRoutes/>
      </Router>
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
  width: 30%;
`
export default App;
render(<App />, document.getElementById('app'));

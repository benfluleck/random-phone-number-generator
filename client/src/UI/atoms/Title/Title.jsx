import React from 'react'
import styled from 'styled-components';

import setClassNames from '../../../utils/setClassNames'

const Title = ({ children }) => (
  <Title.Container className={setClassNames({ "is-size-2": true })}>
    {children}
  </Title.Container>
)

export default Title;

Title.Container = styled.p``

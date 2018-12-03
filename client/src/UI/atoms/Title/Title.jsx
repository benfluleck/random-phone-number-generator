import React from 'react'
import styled from 'styled-components';

import setClassNames from '../../../utils/setClassNames'

const Title = ({ children }) => (
  <Title.Container className={setClassNames({ "is-size-1": true, "has-text-centered": true })}>
    {children}
  </Title.Container>
)

export default Title;

Title.Container = styled.h2``

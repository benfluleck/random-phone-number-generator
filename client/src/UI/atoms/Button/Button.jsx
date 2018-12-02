import React from 'react';
import styled from 'styled-components';

import setClassNames from '../../../utils/setClassNames'

const Button = ({ children, isDisabled, onClick }) => (
  <Button.Container
    className={setClassNames({
      "button": true,
      "is-large": true,
      "is-link": true,
      "is-outlined": true,
      "is-fullwidth": true
    })}
    disabled={isDisabled && 'disabled'}
    onClick={onClick}
  >
   {children}
  </Button.Container>
)

export default Button;

Button.Container = styled.button``

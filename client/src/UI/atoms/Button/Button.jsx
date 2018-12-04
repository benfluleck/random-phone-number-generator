import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import setClassNames from '../../../utils/setClassNames';

const Button = ({ children, isDisabled, onClick }) => (
  <Button.Container
    className={setClassNames({
      'button': true,
      'is-large': true,
      'is-link': true,
      'is-outlined': true,
      'is-fullwidth': true
    })}
    disabled={isDisabled && 'disabled'}
    onClick={onClick}
  >
    {children}
  </Button.Container>
);

Button.Container = styled.button``;

Button.defaultProps = {
  isDisabled: false,
  onClick: () => {},
};

Button.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]).isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;


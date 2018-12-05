import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import setClassNames from '../../../helpers/utils/setClassNames';

const Button = ({ children, isDisabled, onClick, left, right }) => (
  <Button.Container
    className={setClassNames({
      // eslint-disable-next-line quote-props
      'button': true,
      'is-large': true,
      'is-link': true,
      'is-outlined': true,
      'is-fullwidth': true,
      'is-pulled-left' : left,
      'is-pulled-right' : right,
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
  right: false,
  left: false,
  onClick: () => { },
};

Button.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]).isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

export default Button;


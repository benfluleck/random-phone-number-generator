import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import setClassNames from '../../../helpers/utils/setClassNames';

const Title = ({ children }) => (
  <Title.Container className={setClassNames({ 'is-size-1': true, 'has-text-centered': true })}>
    {children}
  </Title.Container>
);

export default Title;

Title.Container = styled.h2``;

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

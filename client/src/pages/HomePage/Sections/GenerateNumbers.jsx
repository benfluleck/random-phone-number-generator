import React from 'react'
import styled from 'styled-components';

import setClassNames from '../../../utils/setClassNames'

const GenerateNumbers = ({ title, numbers, handleOnChange, isDisabled, errorMessages }) => (
  <GenerateNumbers.Container className="section">
    <label className={
      setClassNames({
        'is-size-5': true,
        'has-text-centered': true,
        'has-text-weight-light': true,
        'label': true
      })}>
      {title} &nbsp;
    </label>
    <input
      className={
        setClassNames({
          "input": true,
          "is-medium": true,
          "is-danger": errorMessages
        })}
      type="text"
      id="addInput"
      value={numbers}
      placeholder="Number of Phone Numbers"
      onChange={handleOnChange}
      disabled={isDisabled && 'disabled'} />
    <p className="is-size-6 has-text-danger has-text-centered has-text-weight-light label">{errorMessages}</p>
  </GenerateNumbers.Container>)


GenerateNumbers.Container = styled.section`
`;


export default GenerateNumbers

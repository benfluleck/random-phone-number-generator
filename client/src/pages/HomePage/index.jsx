import React, { Component, Fragment } from 'react';

import validator from '../../utils/validator';
import axiosConfig from '../../config/axiosConfig';
import Button from '../../UI/atoms/Button/Button'
import Title from '../../UI/atoms/Title/Title'
import GenerateNumbers from './Sections/GenerateNumbers';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPhonenumbers: '',
      errorMessage: {},
      isDisabled: false
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      errorMessage: { numberOfPhonenumbers: '' },
    });
    this.setState({ numberOfPhonenumbers: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();

    const dataRules = {
      numberOfPhonenumbers: ['upperLimit', 'lowerLimit'],
    };
    const messages = {
      numberOfPhonenumbers: {
        upperLimit:
          'You can not download more than 10,000 numbers',
        lowerLimit: 'Your number needs to be higher than 1',
      },
    };

    const {
      numberOfPhonenumbers
    } = this.state;

    const validatorResult = validator({ numberOfPhonenumbers }, dataRules, messages);

    if (!validatorResult.isValid) {
      this.setState({ errorMessage: validatorResult.errors });
    } else {
      this.setState({ isDisabled: true }, () => {

        axiosConfig
          .phoneNumbers
          .generate({ numberOfPhonenumbers })
          .then((response) => {
            console.log('I have returned something', response);
          });
      })
    }
  }

  render() {
    const {
      numberOfPhonenumbers,
      isDisabled,
      errorMessage: { numberOfPhonenumbers: errors }
    } = this.state;

    return (
      <Fragment>
        <Title>
          Phone Number Generator
        </Title>
        <GenerateNumbers
          numbers={numberOfPhonenumbers}
          title="Please Enter Number of Phone Numbers"
          handleOnChange={this.handleOnChange}
          isDisabled={isDisabled}
          errorMessages={errors}
          />
        <Button
          isDisabled={isDisabled}
          onClick={this.handleClick}>
          Generate Numbers
        </Button>
      </Fragment>
    );
  }
}



export default HomePage;

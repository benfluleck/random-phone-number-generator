import React, { Component, Fragment } from 'react';

import validator from '../../helpers/utils/validator';
import axiosConfig from '../../config/axiosConfig';
import Button from '../../UI/atoms/Button/Button';
import Title from '../../UI/atoms/Title/Title';
import GenerateNumbers from './Sections/GenerateNumbers';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPhonenumbers: '',
      errorMessage: {},
      isDisabled: false,
      isChecked: false,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      errorMessage: { numberOfPhonenumbers: '' },
    });
    this.setState({ numberOfPhonenumbers: e.target.value });
  }

  toggleCheckbox() {
    const { isChecked } = this.state;

    this.setState({ isChecked: !isChecked });
  }

  handleClick(e) {
    e.preventDefault();

    const dataRules = {
      numberOfPhonenumbers: [ 'upperLimit', 'lowerLimit' ],
    };
    const messages = {
      numberOfPhonenumbers: {
        upperLimit:
          'You can not download more than 10,000 numbers',
        lowerLimit: 'Your number needs to be higher than 1',
      },
    };

    const {
      numberOfPhonenumbers,
      isChecked,
    } = this.state;

    const validatorResult = validator({ numberOfPhonenumbers }, dataRules, messages);

    if (!validatorResult.isValid) {
      this.setState({ errorMessage: validatorResult.errors });
    } else {
      let query;

      isChecked ? query = 'desc' : query = '';

      this.setState({ isDisabled: true }, () => {
        axiosConfig
          .phoneNumbers
          .generate({ numberOfPhonenumbers }, query)
          .then(() => {
            this.props.history.push('/results');
          });
      });
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
        <label className="checkbox has-text-grey-dark is-size-6">
          <input type="checkbox" onClick={this.toggleCheckbox} />
             &nbsp;Descending Order: Default file arrangement is Ascending
        </label>
        <p className="is-size-6 help" />
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

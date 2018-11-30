import React, { Component } from 'react';
import styled from 'styled-components';


class GeneratePhoneNumbers extends Component{
  constructor(props) {
    super(props);
    this.state = {
      numberOfPhonenumbers: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)

  }

  handleOnChange(e) {
    this.setState({ numberOfPhonenumbers: e.target.value });
  }


  render() {
    return (
      <GeneratePhoneNumbers.Container>
        <GeneratePhoneNumbers.Section className="section">
          <label className="is-size-5 has-text-centered has-text-weight-light label">
            Please Enter Number of Phone Numbers &nbsp;
        </label>
          <input
          className="input is-medium"
          type="text"
          id="addInput"
          value={this.state.numberOfPhonenumbers}
          placeholder="Number of Phone Numbers"
          onChange={this.handleOnChange}/>
        </GeneratePhoneNumbers.Section>
        <button
        className="button is-large is-link is-outlined is-fullwidth"
        onClick={()=>{}}
        >
          Generate Numbers
        </button>
      </GeneratePhoneNumbers.Container>
    )
  }
}


GeneratePhoneNumbers.Section = styled.section`

`

GeneratePhoneNumbers.Container= styled.div``


export default GeneratePhoneNumbers;

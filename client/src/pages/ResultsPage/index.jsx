import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import Title from '../../UI/atoms/Title/Title';
import LoadingWrapper from '../../UI/atoms/LoadingWrapper/LoadingWrapper'
import Button from '../../UI/atoms/Button/Button'
import Table from '../../UI/molecules/Table/Table'
import axiosConfig from '../../config/axiosConfig';


class ResultsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      maximumNumber: '',
      minimumNumber: '',
      numberOfPhonenumbers: '',
      isLoading: true,
    }
  }


  componentDidMount() {
    axiosConfig
      .phoneNumbers
      .getNumberInfo()
      .then((res) => {
        const { data: { response } } = res
        this.setState({
          isLoading: false,
          maximumNumber: response.largestNumber,
          minimumNumber: response.smallestNumber,
          numberOfPhonenumbers: response.numberOfPhonenumbers,
        });
      },
        (error) => {
          this.setState({
            isLoading: true,
            error
          });
        }
      )
  }

  handleDownload(e) {
    e.preventDefault();
    axiosConfig
      .phoneNumbers
      .download()
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'text.txt');
      document.body.appendChild(link);
      link.click();
    });

  }




  render() {
    const { maximumNumber, minimumNumber, numberOfPhonenumbers, isLoading } = this.state

    const items = [
      {
        name: 'Smallest Phone Number',
        value: minimumNumber
      },
      {
        name: 'Largest Phone Number',
        value: maximumNumber
      },
      {
        name: 'Number of Phone Numbers',
        value: numberOfPhonenumbers
      },
    ]

    const renderResultsPage = () => (
      <Fragment>
        <ResultsPage.Title>
          <Title>Results</Title>
        </ResultsPage.Title>
        <Table items={items} />
        <div className="field is-grouped">
          <p className="control">
            <Button onClick={this.handleDownload}>Download File</Button>
          </p>
          <p className="control">
            <Button>Back To HomePage</Button>
          </p>
        </div>
      </Fragment>
    )

    {
      return isLoading
        ? <LoadingWrapper />
        : renderResultsPage();
    }

  }
}


ResultsPage.Title = styled.div`
  &::after {
    display: block;
    content: '';
    position: relative;
    height: 1px;
    background: #e4e7ed;
  }
  &:last-child::after {
    display: none;
  }`

export default ResultsPage;

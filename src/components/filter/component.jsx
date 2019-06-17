import React, { Component, Fragment } from 'react'
import { Button, RadioButton, SelectBox } from '../shared'
import './styles'

export class FilterComponent extends Component {
  constructor(props) {
    super(props)

    this.onClickHandler.bind(this)
  }

  onClickHandler(e) {
    console.log(e)
  }

  render() {
    const clearButtonStyles = {
      float: 'right',
      width: '10%',
    }

    return <div className="filter">
      <label>Filter by:</label>
      <Button
        className="secondary small disabled"
        onClick={this.onClickHandler}
        style={clearButtonStyles}
      >
        CLEAR ALL
      </Button>
    </div>
  }
}

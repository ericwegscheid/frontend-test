import React, { Component, Fragment } from 'react'
import { Button, RadioButton, SelectBox } from '../shared'
import './styles'

export class FilterComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: props.isOpen,
      price: props.price,
      category: props.category,
    }
  }

  onClickOpenNow() {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }))
  }

  onClickClearAll(e) {
    this.setState(state => ({
      isOpen: null,
      price: null,
      category: null,
    }))
  }

  render() {
    const clearButtonStyles = {
      float: 'right',
      width: '10%',
    }

    const hasNoFilter =
      !this.state.isOpen &&
      !this.state.price &&
      !this.state.category

    return <div className="filter">
      <label>Filter by:</label>
      <RadioButton
        label="Open Now"
        isActive={!hasNoFilter}
        onClick={this.onClickOpenNow.bind(this)}
      />
      <Button
        className={`secondary small ${hasNoFilter ? 'disabled' : ''}`}
        onClick={this.onClickClearAll.bind(this)}
        style={clearButtonStyles}
      >
        CLEAR ALL
      </Button>
    </div>
  }
}

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

  onSelectPrice(price) {
    this.setState({
      price: price,
    })
  }

  onClickClearAll() {
    this.setState(state => ({
      isOpen: null,
      price: null,
      category: null,
    }))
  }

  render() {
    const { isOpen, price, category } = this.state

    const clearButtonStyles = {
      float: 'right',
      width: '10%',
    }

    const hasNoFilter =
      (!category || category === 'all') &&
      (!price || price === 'all') &&
      !isOpen

    return <div className="filter">
      <label>Filter by:</label>
      <RadioButton
        label="Open Now"
        isActive={!hasNoFilter && isOpen}
        onClick={this.onClickOpenNow.bind(this)}
      />
      <SelectBox
        label="Price"
        options={{all: 'All', $: '$', $$: '$$', $$$: '$$$', $$$$: '$$$$'}}
        onSelectItem={this.onSelectPrice.bind(this)}
        selected="all"
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

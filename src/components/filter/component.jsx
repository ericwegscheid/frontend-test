import { each, sortBy } from 'lodash'
import React, { Component, Fragment } from 'react'
import { Button, RadioButton, SelectBox } from '../shared'
import './styles'

export class FilterComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: !!props.isOpen,
      price: props.price,
      category: props.category,
    }
  }

  applyFilter() {
    const { isOpen, price, category } = this.state

    this.props.fetchRestaurants({
      open_now: isOpen,
      price: price,
      categories: category,
    })
  }

  async onClickOpenNow() {
    await this.setState(state => {
      return {
        isOpen: !state.isOpen,
      }
    })

    this.applyFilter()
  }

  async onSelectPrice(price) {
    await this.setState({
      price: price,
    })

    this.applyFilter()
  }

  async onSelectCategory(category) {
    await this.setState({
      category: category,
    })

    this.applyFilter()
  }

  async onClickClearAll() {
    await this.setState({
      isOpen: null,
      price: null,
      category: null,
    })

    this.applyFilter()
  }

  getCategoryOptions() {
    const options = {}

    each(sortBy(this.props.popularCategories, 'title'), v => options[v.alias] = v.title)

    return {
      all: 'All',
      ...options,
    }
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
        options={{'all': 'All', '1': '$', '2': '$$', '3': '$$$', '4': '$$$$'}}
        onSelectItem={this.onSelectPrice.bind(this)}
        selected={hasNoFilter ? 'all' : price || 'all'}
      />
      <SelectBox
        label="Category"
        options={this.getCategoryOptions()}
        onSelectItem={this.onSelectCategory.bind(this)}
        selected={hasNoFilter ? 'all' : category || 'all'}
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

import { debounce, map } from 'lodash'
import React, { Component } from 'react'
import { Filter } from '../filter'
import { Restaurant } from '../restaurant'
import { Button, Row } from '../shared'
import './styles'

export class RestaurantSearchResultsComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: props.title,
    }

    this.debouncedSetColumns = debounce(this.setColumns.bind(this), 50)

    // map className for columns to number
    this.numbers = {
      'one': 1,
      'two': 2,
      'three': 3,
      'four': 4,
      'five': 5,
      'six': 6,
    }
  }

  componentDidMount() {
    this.setColumns()
    window.addEventListener('resize', this.debouncedSetColumns)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedSetColumns)
    this.debouncedSetColumns.cancel()
  }

  setColumns() {
    const { xlarge, large, medium, small, xsmall } = this.props.viewPorts
    const { currentColumns } = this.state

    const width = window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth

    const columns = {
      [xlarge]: 'six',
      [large]: 'four',
      [medium]: 'three',
      [small]: 'two',
      [xsmall]: 'one',
    }[
      width > large ? xlarge :
        width > medium ? large :
          width > small ? medium :
            width > xsmall ? small : xsmall
    ]

    if ( columns !== currentColumns ) {
      this.setState({
        columns: columns,
      })
    }
  }

  onSelectRestaurant(restaurant) {
    console.log(restaurant)
  }

  onClickLoadMore() {
    console.log('load more')
  }

  render() {
    const { restaurants } = this.props
    const { columns, title } = this.state

    if (!restaurants) {
      return null
    }

    const loadMoreButtonStyles = {
      width: '25%',
      minWidth: '128px',
      margin: '0 auto',
    }

    return <div className="restaurant-search-results">
      <h2 className="title">{title}</h2>
      <div className={`restaurants ${columns}-column`}>
        {
          map(restaurants, restaurant => (
            <Restaurant
              key={restaurant.id}
              restaurant={restaurant}
              onSelect={this.onSelectRestaurant.bind(this)}
            />
          ))
        }
      </div>
      <Button
        className="secondary"
        onClick={this.onClickLoadMore.bind(this)}
        style={loadMoreButtonStyles}
      >
        Load More
      </Button>
    </div>
  }
}

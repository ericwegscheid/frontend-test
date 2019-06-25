import { debounce, map, slice } from 'lodash'
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
      visibleRows: 2,
    }

    // used to prevent excessive execution of setColumns function
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

    if (columns !== currentColumns) {
      this.setState({
        columns: columns,
      })
    }
  }

  onClickLoadMore() {
    this.setState(state => ({
      visibleRows: state.visibleRows + 2,
    }))
  }

  scrollUp() {
    if (window.pageYOffset <= 0) {
      clearInterval(this.scrollInterval)
    }

    window.scroll(0, window.pageYOffset - 50)
  }

  onClickBackToTop() {
    this.scrollInterval = setInterval(this.scrollUp.bind(this), 5)
  }

  render() {
    const { restaurants } = this.props
    const { columns, title, visibleRows } = this.state

    if (!restaurants) return null

    const loadMoreButtonStyles = {
      width: '25%',
      minWidth: '128px',
      margin: '0 auto',
    }

    const columnCount = this.numbers[columns]
    const visibleRestaurants = slice(restaurants, 0, columnCount * visibleRows)
    const noMore = visibleRows * columnCount > visibleRestaurants.length

    return <div className="restaurant-search-results">
      <h2 className="title">{title}</h2>
      <div className={`restaurants ${columns}-column`}>
        {
          map(visibleRestaurants, restaurant => (
            <Restaurant
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))
        }
      </div>
      {
        !visibleRestaurants.length && <p className="no-results">No Restaurants Found</p>
      }
      {
        window.pageYOffset === 0 && noMore ? null :
          <Button
            className="secondary"
            onClick={
              noMore ?
                this.onClickBackToTop.bind(this) :
                this.onClickLoadMore.bind(this)
            }
            style={loadMoreButtonStyles}
          >
            {
              noMore ?
                'Back To Top' :
                'Load More'
            }
          </Button>
      }
    </div>
  }
}

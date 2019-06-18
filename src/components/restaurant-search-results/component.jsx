import React, { Component } from 'react'
import { Filter } from '../filter'
import { Button, Row } from '../shared'
import './styles'

export class RestaurantSearchResultsComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: props.title,
    }
  }

  onClickLoadMore() {
    console.log('load more')
  }

  render() {
    const { restaurants } = this.props
    const { title } = this.state

    if (!restaurants) {
      return null
    }

    const loadMoreButtonStyles = {
      width: '25%',
      minWidth: '128px',
      margin: '80px auto 0',
    }

    return <div className="restaurant-search-results">
      <h2 className="title">{title}</h2>
      <div className="restaurants">
        {
          restaurants.map(restaurant => (
            <div className="restaurant">{restaurant.name}</div>
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

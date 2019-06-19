import { map } from 'lodash'
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
  }

  onSelectRestaurant(restaurant) {
    console.log(restaurant)
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
      margin: '0 auto',
    }

    return <div className="restaurant-search-results">
      <h2 className="title">{title}</h2>
      <div className="restaurants">
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

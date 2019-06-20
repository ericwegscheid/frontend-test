import { each, findIndex } from 'lodash'
import React, { Component } from 'react'
import { Button, StarRating } from '../shared'
import './styles'

export class RestaurantComponent extends Component {
  constructor(props) {
    super(props)
  }

  onClickLearnMore() {
    console.log('learn more')
  }

  getCategory() {
    const { categories } = this.props.restaurant
    const { popularCategories, selectedCategory } = this.props

    // ensure a default category is set
    let category = (selectedCategory || {}).value || categories[0].title

    // in the case no category is specified
    if (!selectedCategory || selectedCategory.key === 'all') {
      // of restaurant categories choose most popular
      // popularCategories should always be sorted by popularity
      each(popularCategories, (v) => {
        if (findIndex(categories, ['alias', v.alias]) >= 0) {
          category = v.title
        }
      })
    }

    return category
  }

  render() {
    const { image_url, is_closed, name, price, rating } = this.props.restaurant

    return <div className="restaurant">
      <div
        className={`thumb ${image_url ? '' : 'default'}`}
        onClick={this.onClickLearnMore.bind(this)}
        style={{ backgroundImage: `url(${image_url})` }}
      ></div>
      <h4>{name}</h4>
      <StarRating rating={rating} />
      <div className="details">
        <span className="category-price">
          {this.getCategory()} &bull; {price}
        </span>
        <span className={`is-open ${is_closed ? 'closed' : ''}`}>
          {is_closed ? 'Closed' : 'Open Now'}
        </span>
      </div>
      <Button
        onClick={this.onClickLearnMore.bind(this)}
      >
        Learn More
      </Button>
    </div>
  }
}

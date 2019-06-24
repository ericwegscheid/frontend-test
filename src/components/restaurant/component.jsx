import { each, findIndex } from 'lodash'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, StarRating } from '../shared'
import './styles'

export class RestaurantComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      category: this.getCategory(),
    }
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

  onClickRestaurant(restaurant) {
    this.props.setRestaurantDetails(restaurant)
  }

  render() {
    const { category } = this.state
    const { alias, id, image_url, is_closed, name, price, rating } = this.props.restaurant

    // include relevant category
    const restaurant = {
      ...this.props.restaurant,
      category,
    }

    return <div className="restaurant">
      <Link to={`/${alias}`}>
        <div
          className={`thumb ${image_url ? '' : 'default'}`}
          onClick={this.onClickRestaurant.bind(this, restaurant)}
          style={{ backgroundImage: `url(${image_url})` }}
        ></div>
      </Link>
      <h4>{name}</h4>
      <StarRating rating={rating} />
      <div className="details">
        <span className="category-price">
          {category} &bull; {price}
        </span>
        <span className={`is-open ${is_closed ? 'closed' : ''}`}>
          {is_closed ? 'Closed' : 'Open Now'}
        </span>
      </div>
      <Link to={`/${alias}`}>
        <Button
          onClick={this.onClickRestaurant.bind(this, restaurant)}
        >
          Learn More
        </Button>
      </Link>
    </div>
  }
}

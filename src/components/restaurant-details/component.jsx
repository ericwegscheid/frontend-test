import { get } from 'lodash'
import React, { Component } from 'react'
import { Oops, Row, Spinner, StarRating } from '../shared'
import './styles'

export class RestaurantDetailsComponent extends Component {
  constructor(props) {
    super(props)

    this.props.fetchRestaurantDetails(props.id)
  }

  render() {
    const { category, error, is_closed, location, name, price, rating } = this.props
    const photos = get(this.props, 'restaurantDetails.photos', [])

    return <div className="restaurant-details">
      <Row>
        <h1 className="title">{name}</h1>
        <StarRating rating={rating} />
        <div className="details">
          <span className="category-price">
            {category} &bull; {price}
          </span>
          <span className={`is-open ${is_closed ? 'closed' : ''}`}>
            {is_closed ? 'Closed' : 'Open Now'}
          </span>
        </div>
      </Row>
      <Row className="borders">
        <p>{get(location, 'display_address', []).join(' ')}</p>
      </Row>
      {
        this.props.isFetchingRestaurantDetails ?
          <Spinner /> :
          error ?
            <Oops /> :
            <Row>
              <p>get the reviews</p>
            </Row>
      }
    </div>
  }
}

import { get, map, slice } from 'lodash'
import React, { Component } from 'react'
import { Oops, Row, Spinner, StarRating } from '../shared'
import './styles'

export class RestaurantReviewComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { category, error, is_closed, location, name, price, rating } = this.props
    const photos = get(this.props, 'restaurantReviews.photos', [])

    return <div className="restaurant-review">
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
        <div className="location">
          <div className="map"></div>
          {
            map(slice(photos, 0, 2), v => (
              <div
                key={v}
                className={`pic ${v ? '' : 'default'}`}
                style={{ backgroundImage: `url(${v})` }}
              ></div>
            ))
          }
        </div>
        <p className="address">{get(location, 'display_address', []).join(' ')}</p>
      </Row>
      {
        this.props.isFetchingRestaurantReviews ?
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

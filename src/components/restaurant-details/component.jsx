import { get, map, slice } from 'lodash'
import React, { Component } from 'react'
import { Oops, Row, Spinner, StarRating } from '../shared'
import './styles'

export class RestaurantDetailsComponent extends Component {
  constructor(props) {
    super(props)

    const { fetchRestaurantDetails, fetchRestaurantReviews, id } = this.props

    fetchRestaurantDetails(id)
    fetchRestaurantReviews(id)
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
        <div className="location">
          <div className="map"></div>
          <div className="images">
            {
              this.props.isFetchingRestaurantDetails ?
                <Spinner /> :
                map(slice(photos, 0, 2), v => (
                  <div
                    key={v}
                    className={`pic ${v ? '' : 'default'}`}
                    style={{ backgroundImage: `url(${v})` }}
                  ></div>
                ))
            }
          </div>
        </div>
        <p className="address">{get(location, 'display_address', []).join(' ')}</p>
      </Row>
      {
        this.props.isFetchingRestaurantReviews ?
          <Spinner /> :
          error ?
            <Oops /> :
            <Row>
              <p>{JSON.stringify(this.props.restaurantReviews)}</p>
            </Row>
      }
    </div>
  }
}

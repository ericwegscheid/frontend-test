import { isNumber } from 'lodash'
import React, { Component } from 'react'
import { Filter } from '../filter'
import { RestaurantSearchResults } from '../restaurant-search-results'
import { Oops, Row, Spinner } from '../shared'
import './styles'

export class RestaurantSearchComponent extends Component {
  constructor(props) {
    super(props)

    const limit = !isNumber(props.categoryLimit) ? 10 : props.categoryLimit

    this.props.initialize().then(() => {
      this.props.setPopularCategories(limit)
    })
  }

  handleOnClick() {
    this.props.fetchRestaurants()
  }

  render() {
    const { title, description, error, restaurants } = this.props

    return <div className="restaurant-search">
      <Row>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </Row>
      <Row className="borders">
        <Filter isDisabled={!!error}/>
      </Row>
      <Row>
        {
          this.props.isFetchingRestaurants ?
            <Spinner /> :
            error ?
              <Oops /> :
              <RestaurantSearchResults title="All Restaurants" />
        }
      </Row>
    </div>
  }
}

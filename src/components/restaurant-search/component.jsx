import React, { Component } from 'react'
import { Filter } from '../filter'
import { RestaurantSearchResults } from '../restaurant-search-results'
import { Oops, Row, Spinner } from '../shared'
import './styles'

export class RestaurantSearchComponent extends Component {
  constructor(props) {
    super(props)

    this.props.initialize().then(() => {
      console.log('yup')
      this.props.setPopularCategories(props.categoryLimit)
    })
  }

  handleOnClick() {
    this.props.fetchRestaurants()
  }

  render() {
    const { title, description, error, restaurants } = this.props

    const filterRowStyles = {
      borderTopWidth: '1px',
      borderBottomWidth: '1px',
      borderStyle: 'solid',
    }

    return <div className="restaurant-search">
      <Row>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </Row>
      <Row style={filterRowStyles}>
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

import React, { Component } from 'react'
import { RestaurantSearch } from '../../components/restaurant-search'
import './styles'

export class AppComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <RestaurantSearch categoryLimit={10} />
  }
}

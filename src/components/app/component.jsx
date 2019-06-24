import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { RestaurantDetails } from '../../components/restaurant-details'
import { RestaurantSearch } from '../../components/restaurant-search'
import './styles'

export class AppComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <BrowserRouter>
      <Switch>
        <Route path="/:alias" component={RestaurantDetails} />
        <Route component={RestaurantSearch} />
      </Switch>
    </BrowserRouter>
  }
}

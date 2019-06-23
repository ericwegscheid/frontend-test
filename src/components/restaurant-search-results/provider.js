import { connect } from 'react-redux'
import { RestaurantSearchResultsComponent } from './component'

const mapStateToProps = state => ({
  restaurants: state.mainView.restaurants,
  viewPorts: state.viewPorts,
})

export const RestaurantSearchResults = connect(mapStateToProps)(RestaurantSearchResultsComponent)

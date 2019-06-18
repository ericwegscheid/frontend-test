import { connect } from 'react-redux'
import { RestaurantSearchResultsComponent } from './component'

const mapStateToProps = state => ({
  restaurants: state.mainView.restaurants,
})

export const RestaurantSearchResults = connect(mapStateToProps)(RestaurantSearchResultsComponent)

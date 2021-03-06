import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRestaurantDetails, fetchRestaurantReviews } from '../../store'
import { RestaurantDetailsComponent } from './component'

const mapStateToProps = state => ({
  ...state.detailsView,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchRestaurantDetails,
    fetchRestaurantReviews,
  }, dispatch)
}

export const RestaurantDetails = connect(mapStateToProps, mapDispatchToProps)(RestaurantDetailsComponent)

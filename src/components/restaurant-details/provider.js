import { connect } from 'react-redux'
import { RestaurantDetailsComponent } from './component'

const mapStateToProps = state => ({
  ...state,
})

export const RestaurantDetails = connect(mapStateToProps)(RestaurantDetailsComponent)

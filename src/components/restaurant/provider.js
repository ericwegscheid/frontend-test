import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setRestaurantDetails } from '../../store'
import { RestaurantComponent } from './component'

const mapStateToProps = state => ({
  selectedCategory: state.filter.category,
  popularCategories: state.filter.popularCategories,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setRestaurantDetails,
  }, dispatch)
}

export const Restaurant = connect(mapStateToProps, mapDispatchToProps)(RestaurantComponent)

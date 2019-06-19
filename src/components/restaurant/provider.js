import { connect } from 'react-redux'
import { RestaurantComponent } from './component'

const mapStateToProps = state => ({
  selectedCategory: state.filter.category,
  popularCategories: state.filter.popularCategories,
})

export const Restaurant = connect(mapStateToProps)(RestaurantComponent)

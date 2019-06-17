import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRestaurants } from '../../store'
import { FilterComponent } from './component'

const mapStateToProps = state => ({
  ...state.filter,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchRestaurants,
  }, dispatch)
}

export const Filter = connect(mapStateToProps, mapDispatchToProps)(FilterComponent)

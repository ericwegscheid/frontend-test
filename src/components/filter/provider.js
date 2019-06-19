import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { applyFilter, fetchRestaurants } from '../../store'
import { FilterComponent } from './component'

const mapStateToProps = state => ({
  ...state.filter,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    applyFilter,
    fetchRestaurants,
  }, dispatch)
}

export const Filter = connect(mapStateToProps, mapDispatchToProps)(FilterComponent)

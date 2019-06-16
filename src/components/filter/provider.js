import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectCategories } from '../../store'
import { FilterComponent } from './component'

const mapStateToProps = state => ({
  ...state.filter,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    selectCategories,
  }, dispatch)
}

export const MainView = connect(mapStateToProps, mapDispatchToProps)(FilterComponent)

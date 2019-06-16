import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { initialize, fetchRestaurants } from '../../store'
import { MainViewComponent } from './component'

const mapStateToProps = state => ({
  ...state.mainView,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    initialize,
    fetchRestaurants,
  }, dispatch)
}

export const MainView = connect(mapStateToProps, mapDispatchToProps)(MainViewComponent)

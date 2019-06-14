import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { initialize, fetchDataTest } from '../../store'
import { MainViewComponent } from './component'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    initialize,
    fetchDataTest
  }, dispatch)
}

export const MainView = connect(mapStateToProps, mapDispatchToProps)(MainViewComponent)

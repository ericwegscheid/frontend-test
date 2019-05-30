import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { initialize, fetchDataTest } from '../../store/ducks/app'
import { AppComponent } from './component'

const mapStateToProps = state => ({
  ...state.app
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    initialize,
    fetchDataTest
  }, dispatch)
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)

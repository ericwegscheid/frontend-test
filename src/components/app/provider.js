import { connect } from 'react-redux'
import { AppComponent } from './component'

const mapStateToProps = state => ({
  ...state
})

export const App = connect(mapStateToProps)(AppComponent)

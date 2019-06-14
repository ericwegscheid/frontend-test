import { connect } from 'react-redux'
import { DetailViewComponent } from './component'

const mapStateToProps = state => ({
  ...state.app
})

export const App = connect(mapStateToProps)(DetailViewComponent)

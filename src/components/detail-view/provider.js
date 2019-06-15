import { connect } from 'react-redux'
import { DetailViewComponent } from './component'

const mapStateToProps = state => ({
  ...state,
})

export const App = connect(mapStateToProps)(DetailViewComponent)

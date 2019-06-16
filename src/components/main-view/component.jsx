import React, { Component, Fragment } from 'react'
// import { Filter } from '../filter'
import { Row } from '../shared'
import './styles'

export class MainViewComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {isFetching: true}

    this.props.initialize().then(() => {
      this.setState({ isFetching: false })
    })
  }

  handleOnClick() {
    this.setState({ isFetching: true })

    this.props.fetchRestaurants().then(() => {
      this.setState({ isFetching: false })
    })
  }

  render() {
    const { title, description } = this.props
    const rowStyles = {
      borderTopWidth: '1px',
      borderBottomWidth: '1px',
      borderStyle: 'solid',
    }

    return <Fragment>
      <Row>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </Row>
      <Row style={rowStyles}>
      </Row>
    </Fragment>
  }
}

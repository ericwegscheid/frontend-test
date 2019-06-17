import React, { Component, Fragment } from 'react'
import { Filter } from '../filter'
import { Row, Spinner } from '../shared'
import './styles'

export class RestaurantSearchComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {isFetching: true}

    this.props.initialize().then(() => {
      this.props.setPopularCategories(props.categoryLimit)
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
    const { title, description, restaurants } = this.props

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
        <Filter />
      </Row>
      <Row>
        {
          this.state.isFetching ?
            <Spinner /> :
            <pre>{JSON.stringify(restaurants)}</pre>
        }
      </Row>
    </Fragment>
  }
}

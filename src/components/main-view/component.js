import React, { Component, Fragment } from 'react'
import './styles.less'

export class MainViewComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFetching: true
    }

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
    const { title, description, data } = this.props

    return (<div>
      {
        this.state.isFetching
          ? <h1>fetching...</h1>
          : <Fragment>
              <h1 className="title">{title}</h1>
              <p className="description">{description}</p>
            </Fragment>
      }
      <button className="primary" onClick={this.handleOnClick.bind(this)}>Get some more data</button>
    </div>
  )}
}

import React, { Component, Fragment } from 'react'

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

    this.props.fetchDataTest().then(() => {
      this.setState({ isFetching: false })
    })
  }

  render() {
    const { title, data } = this.props

    return (<div>
      {
        this.state.isFetching
          ? <h1>fetching...</h1>
          : <Fragment>
              <h1>{title}</h1>
              <pre>{data}</pre>
            </Fragment>
      }
      <button onClick={this.handleOnClick.bind(this)}>Get some more data</button>
    </div>
  )}
}

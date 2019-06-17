import { isFunction } from 'lodash'
import React, { Component } from 'react'
import './styles'

export class RadioButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: props.isActive,
    }
  }

  componentWillReceiveProps(nextProps) {
    const shouldUpdate = this.state.isActive !== nextProps.isActive

    if (shouldUpdate) {
      this.setState({
        isActive: nextProps.isActive,
      })
    }

    return shouldUpdate
  }

  onClickHandler() {
    this.setState(state => ({
      isActive: !state.isActive,
    }))

    if (isFunction(this.props.onClick)) {
      this.props.onClick()
    }
  }

  render() {
    const { isActive } = this.state

    return <div
      className="control"
      onClick={this.onClickHandler.bind(this)}
    >
      <div 
        className={`radio-button ${isActive ? 'active' : ''}`}
      ></div>
      <label>{ this.props.label }</label>
    </div>
  }
}

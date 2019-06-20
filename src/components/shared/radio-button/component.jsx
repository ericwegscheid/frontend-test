import { isFunction } from 'lodash'
import React, { Component } from 'react'
import './styles'

export class RadioButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: props.isActive,
      isDisabled: props.isDisabled,
    }
  }

  componentWillReceiveProps(nextProps) {
    const shouldUpdate =
      this.state.isActive !== nextProps.isActive ||
      this.state.isDisabled !== nextProps.isDisabled


    if (shouldUpdate) {
      this.setState({
        isActive: nextProps.isActive,
        isDisabled: nextProps.isDisabled,
      })
    }

    return shouldUpdate
  }

  onClick() {
    this.setState(state => ({
      isActive: !state.isActive,
    }))

    if (isFunction(this.props.onClick)) {
      this.props.onClick()
    }
  }

  render() {
    const { isActive, isDisabled } = this.state

    return <div
      className={`control ${isDisabled ? 'disabled' : ''}`}
      onClick={this.onClick.bind(this)}
    >
      <div
        className={`radio-button ${isActive ? 'active' : ''}`}
      ></div>
      <label>{this.props.label}</label>
    </div>
  }
}

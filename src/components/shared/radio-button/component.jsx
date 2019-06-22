import { isFunction } from 'lodash'
import React, { Component } from 'react'
import './styles'

export class RadioButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSelected: props.isSelected,
      isDisabled: props.isDisabled,
    }
  }

  componentWillReceiveProps(nextProps) {
    const shouldUpdate =
      this.state.isSelected !== nextProps.isSelected ||
      this.state.isDisabled !== nextProps.isDisabled


    if (shouldUpdate) {
      this.setState({
        isSelected: nextProps.isSelected,
        isDisabled: nextProps.isDisabled,
      })
    }

    return shouldUpdate
  }

  onClick() {
    this.setState(state => ({
      isSelected: !state.isSelected,
    }))

    if (isFunction(this.props.onClick)) {
      this.props.onClick()
    }
  }

  render() {
    const { isSelected, isDisabled } = this.state

    return <div
      className={`control ${isDisabled ? 'disabled' : ''}`}
      onClick={this.onClick.bind(this)}
    >
      <div
        className={`radio-button ${isSelected ? 'selected' : ''}`}
      ></div>
      <label>{this.props.label}</label>
    </div>
  }
}

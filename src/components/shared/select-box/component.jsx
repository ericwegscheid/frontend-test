import { isFunction, map } from 'lodash'
import React, { Component } from 'react'
import './styles'

export class SelectBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      options: {
        ...props.options,
      },
      selected: props.selected,
    }
  }

  componentWillReceiveProps(nextProps) {
    const shouldUpdate = this.state.selected !== nextProps.selected

    if (shouldUpdate) {
      this.setState({
        selected: nextProps.selected,
      })
    }

    return shouldUpdate
  }

  onClick() {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }))
  }

  onSelectItem(selected) {
    this.setState(state => ({
      selected: selected,
    }))

    if (isFunction(this.props.onSelectItem)) {
      this.props.onSelectItem(selected)
    }
  }

  render() {
    const { isOpen } = this.state

    return <div
      className={`control select-box ${isOpen ? 'open' : ''}`}
      onClick={this.onClick.bind(this)}
    >
      <ul>
        {
          map(this.props.options, (v, k) =>
            <li
              key={k}
              className={this.state.selected === k ? 'selected' : ''}
              onClick={this.onSelectItem.bind(this, k)}
            >
              <span>{v}</span>
            </li>
          )
        }
      </ul>
      <label>{this.props.label}</label>
    </div>
  }
}

import { isFunction, map } from 'lodash'
import React, { Component } from 'react'
import './styles'

export class SelectBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDisabled: props.isDisabled,
      isOpen: false,
      options: {
        ...props.options,
      },
      selected: props.selected,
    }
  }

  componentWillReceiveProps(nextProps) {
    const shouldUpdate =
      this.state.selected !== nextProps.selected ||
      this.state.isDisabled !== nextProps.isDisabled


    if (shouldUpdate) {
      this.setState({
        selected: nextProps.selected,
        isDisabled: nextProps.isDisabled,
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
    const { isDisabled, isOpen, selected } = this.state
    const classNames = [
      'control select-box',
      isDisabled ? 'disabled' : '',
      isOpen ? 'open' : '',
    ].join(' ')

    return <div
      className={classNames}
      onClick={this.onClick.bind(this)}
    >
      <ul>
        {
          map(this.props.options, v =>
            <li
              key={v.key}
              className={selected.key === v.key ? 'selected' : ''}
              onClick={this.onSelectItem.bind(this, v)}
            >
              <span>{v.value}</span>
            </li>
          )
        }
      </ul>
      <label>{this.props.label}<span>{selected.value}</span></label>
    </div>
  }
}

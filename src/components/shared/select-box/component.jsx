import { filter, get, isArray, isFunction, isPlainObject, isNil, isString, map } from 'lodash'
import React, { Component } from 'react'
import './styles'

export class SelectBox extends Component {
  constructor(props) {
    super(props)

    const options =  this.scrubOptions(props.options)

    this.state = {
      className: props.className,
      isDisabled: props.isDisabled,
      isOpen: false,
      options: options,
      selected: props.selected || options[0],
    }
  }

  componentWillReceiveProps(nextProps) {
    const shouldUpdate =
      this.state.selected !== nextProps.selected ||
      this.state.isDisabled !== nextProps.isDisabled ||
      !isArray(nextProps.options)

    if (shouldUpdate) {
      this.setState(state => {
        const selected = !this.isValidOption(nextProps.selected) ?
          state.selected :
          nextProps.selected
        const isDisabled = isNil(nextProps.isDisabled) ?
          state.isDisabled :
          nextProps.isDisabled

        return {
          selected: selected,
          isDisabled: isDisabled,
          options: this.scrubOptions(nextProps.options),
        }
      })
    }

    return shouldUpdate
  }

  isValidOption(option) {
    return isPlainObject(option) && isString(option.key) && isString(option.value)
  }

  scrubOptions(options) {
    const defaultOptions = [{ key: '0', value: 'default' }]

    const opts = filter(
      !isArray(options) ? defaultOptions : options,
      v => this.isValidOption(v)
    )

    return opts.length ? opts : defaultOptions
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
    const { className, isDisabled, isOpen, options, selected } = this.state

    const classNames = [
      'control select-box',
      isString(className) ? className : '',
      isDisabled ? 'disabled' : '',
      isOpen ? 'open' : '',
    ].join(' ')

    return <div
      className={classNames}
      onClick={this.onClick.bind(this)}
    >
      <div className="label">
        <label>{this.props.label}</label>
        <span>{get(selected, 'value')}</span>
      </div>
      <ul>
        {
          map(options, v =>
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
    </div>
  }
}

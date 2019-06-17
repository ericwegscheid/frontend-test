import React from 'react'
import './styles'

// @TODO should we have a control component?

export const RadioButton = props => {
  return <div className="control">
    <div className="radio-button"></div>
    <label>props.label</label>
  </div>
}

import React from 'react'
import './styles'

export const Button = props => {
  return (
    <button {...props}>
      { props.children }
    </button>
  )
}

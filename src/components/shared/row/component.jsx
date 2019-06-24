import React from 'react'
import './styles'

export const Row = props => {
  return (
    <div className={`row ${props.className || ''}`}>
      <div className="row-content">
        { props.children }
      </div>
    </div>
  )
}

import React from 'react'
import './styles'

export const Oops = props => {
  return (
    <div className="oops" {...props}>
      <div className="space-invader"></div>
      <h1>oops</h1>
      <h3>failure to contact the mothership</h3>
    </div>
  )
}

import React, { Component } from 'react'
import { Button } from '../shared'
import './styles'

export class Restaurant extends Component {
  constructor(props) {
    super(props)
  }

  onClickLearnMore() {
    console.log('learn more')
  }

  render() {
    const { image_url, name } = this.props.restaurant

    return <div className="restaurant">
      <div className="thumb" style={{ backgroundImage: `url(${image_url})` }}></div>
      <h4>{name}</h4>
      <Button
        onClick={this.onClickLearnMore.bind(this)}
      >
        Learn More
      </Button>
    </div>
  }
}

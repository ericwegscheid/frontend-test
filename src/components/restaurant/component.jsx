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
    const { image_url, is_closed, price, name } = this.props.restaurant

    return <div className="restaurant">
      <div
        className={`thumb ${image_url ? '' : 'default'}`}
        style={{ backgroundImage: `url(${image_url})` }}
      ></div>
      <h4>{name}</h4>
      <span className="category">Category</span>
      <span className="price">{price}</span>
      <span className={`isOpen ${is_closed ? 'closed' : ''}`}>
        {is_closed ? 'Closed' : 'Open Now'}
      </span>
      <Button
        onClick={this.onClickLearnMore.bind(this)}
      >
        Learn More
      </Button>
    </div>
  }
}

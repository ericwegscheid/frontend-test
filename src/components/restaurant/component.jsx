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

  getCategory() {
    return 'Category'
  }

  render() {
    const { image_url, is_closed, price, name } = this.props.restaurant

    return <div className="restaurant">
      <div
        className={`thumb ${image_url ? '' : 'default'}`}
        style={{ backgroundImage: `url(${image_url})` }}
      ></div>
      <h4>{name}</h4>
      <div>star star star star star</div>
      <div className="details">
        <span className="category-price">
          {this.getCategory()} &bull; {price}
        </span>
        <span className={`is-open ${is_closed ? 'closed' : ''}`}>
          {is_closed ? 'Closed' : 'Open Now'}
        </span>
      </div>
      <Button
        onClick={this.onClickLearnMore.bind(this)}
      >
        Learn More
      </Button>
    </div>
  }
}

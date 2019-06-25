import { get, map, slice } from 'lodash'
import React from 'react'
import { StarRating } from '../shared'
import './styles'

export const RestaurantReview = (props) => {
  const { rating, text, time_created, user } = props.review
  const { image_url, name } = user
  const date = new Date(time_created)
  const createdDate = [
    date.getMonth(),
    date.getDate(),
    date.getYear(),
  ].join('/')

  return (
    <div className="restaurant-review">
      <div className="user">
        <div
          className="pic"
          style={{ backgroundImage: `url(${image_url})` }}
        ></div>
        <p className="name">{name}</p>
        <p className="date">{createdDate}</p>
      </div>
      <div className="review">
        <StarRating rating={rating} />
        <p>{text}</p>
      </div>
    </div>
  )
}

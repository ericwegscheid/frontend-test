import { clamp, times } from 'lodash'
import React from 'react'
import './styles'

export const paths = {
  full: 'M 11.2168,0 8.58203,8.167969 0,8.148439 l 6.95508,5.029297 -2.66992,8.15625 6.93164,-5.060547 6.93164,5.060547 -2.66992,-8.15625 6.95312,-5.029297 -8.58203,0.01953 z',
  half: 'M 11.21529,0 8.58134,8.167124 0,8.148294 6.95342,13.177188 4.28386,21.3326 11.21529,16.273474 18.14672,21.3326 15.477,13.177188 22.43042,8.148294 13.84924,8.167124 Z m 0,3.696328 1.80836,5.607093 5.8912,-0.01282 -4.77374,3.452418 1.83289,5.599179 -4.75871,-3.473312 z',
  empty: 'M 11.21484,0 8.58089,8.166944 0,8.148344 l 6.95306,5.028634 -2.66909,8.155056 6.93087,-5.058606 6.93134,5.058606 -2.66909,-8.155056 6.95307,-5.028634 -8.58086,0.0186 z m 0,3.696417 1.80867,5.606375 5.8911,-0.0124 -4.77385,3.452501 1.83296,5.599141 -4.75888,-3.473172 -4.75837,3.473172 1.83295,-5.599141 -4.77387,-3.452501 5.89113,0.0124 z',
}

export const Star = (props) => {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    width="84.781006"
    height="80.632385"
    viewBox="0 0 22.431642 21.333984"
    version="1.1"
  >
    <path d={paths[props.fill]} />
  </svg>
}

export const StarRating = (props) => {
  const rating = clamp(props.rating, 0, 5)
  const fullStars = parseInt(rating)
  const hasHalfStar = !!(rating % 1)
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="star-rating">
      {times(fullStars, n => <Star key={`full-${n}`} fill="full" />)}
      {hasHalfStar && <Star key="half" fill="half" />}
      {times(emptyStars, n => <Star key={`empty-${n}`} fill="empty" />)}
    </div>
  )
}

import axios from 'axios'
import { get, isNil, map } from 'lodash'

const businessesEndpoint = 'http://localhost:9000/api/v3/businesses'

// maps filter object then converts to query string
export function getFilterParams(filter) {
  return [
    map(
      {
        term: 'restaurants',
        location: 'Las Vegas',
        open_now: get(filter, 'isOpen'),
        price: get(filter, 'price.key'),
        categories: get(filter, 'category.key'),
      },
      (v, k) => isNil(v) ? '' : `${k}=${v}`).join('&'),
  ].join('')
}

export function initialize() {
  return fetchRestaurants()
}

export function setPopularCategories(limit) {
  return dispatch => {
    dispatch({
      type: 'SET_CATEGORIES',
      payload: limit,
    })
  }
}

export function applyFilter(filter) {
  return dispatch => {
    dispatch({
      type: 'APPLY_FILTER',
      payload: filter,
    })
  }
}

export function fetchRestaurants(filter) {
  const request = axios({
    method: 'get',
    url: `${businessesEndpoint}/search?${getFilterParams(filter)}`,
  })

  return dispatch => {
    dispatch({
      type: 'FETCH_RESTAURANTS',
    })

    return request.then(data => {
      dispatch({
        type: 'RECEIVED_RESTAURANTS',
        payload: data,
      })
    }).catch(error => {
      dispatch({
        type: 'FETCH_RESTAURANTS_ERROR',
        payload: error,
      })
    })
  }
}

export function setRestaurantDetails(restaurant) {
  return dispatch => {
    dispatch({
      type: 'SET_RESTAURANT_DETAILS',
      payload: restaurant,
    })
  }
}

export function fetchRestaurantDetails(id) {
  const request = axios({
    method: 'get',
    url: `${businessesEndpoint}/${id}`,
  })

  return dispatch => {
    dispatch({
      type: 'FETCH_RESTAURANT_DETAILS',
    })

    return request.then(data => {
      dispatch({
        type: 'RECEIVED_RESTAURANT_DETAILS',
        payload: data,
      })
    }).catch(error => {
      dispatch({
        type: 'FETCH_RESTAURANT_DETAILS_ERROR',
        payload: error,
      })
    })
  }
}

export function fetchRestaurantReviews(id) {
  const request = axios({
    method: 'get',
    url: `${businessesEndpoint}/${id}/reviews`,
  })

  return dispatch => {
    dispatch({
      type: 'FETCH_RESTAURANT_REVIEWS',
    })

    return request.then(data => {
      dispatch({
        type: 'RECEIVED_RESTAURANT_REVIEWS',
        payload: data,
      })
    }).catch(error => {
      dispatch({
        type: 'FETCH_RESTAURANT_REVIEWS_ERROR',
        payload: error,
      })
    })
  }
}

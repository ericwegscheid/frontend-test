import axios from 'axios'
import { map } from 'lodash'

const businessesEndpoint = 'http://localhost:9000/api/v3/businesses'

const query = {
  term: 'restaurants',
  location: 'Las Vegas',
}

export function getUrl(filter) {
  console.log(filter)
  return [
    `${businessesEndpoint}/search?`,
    map(
      { ...query, ...filter },
      (v, k) => `${k}=${v}`).join('&'),
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

export function fetchRestaurants(filter) {
  const request = axios({
    method: 'get',
    url: getUrl(filter),
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

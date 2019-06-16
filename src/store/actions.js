import axios from 'axios'
import { map } from 'lodash'

const businessesEndpoint = 'http://localhost:9000/api/v3/businesses'

const query = {
  term: 'restaurants',
  location: 'Las Vegas',
}

export function getUrl(filter) {
  return [
    `${businessesEndpoint}/search?`,
    map(
      { ...query, ...filter },
      (v, k) => `${v}=${k}`).join('&'),
  ].join('')
}

export function initialize() {
  return fetchRestaurants()
}

export function fetchRestaurants(filter) {
  const request = axios({
    method: 'get',
    url: getUrl(filter),
  })

  return dispatch => {
    return request.then(data => {
      dispatch({
        type: 'FETCH_RESTAURANTS',
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
    return request.then(data => {
      dispatch({
        type: 'FETCH_RESTAURANT_DETAILS',
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

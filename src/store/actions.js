import axios from 'axios'

export function initialize() {
  return fetchRestaurants()
}

export function fetchRestaurants() {
  const request = axios({
    method: 'get',
    url: 'http://localhost:9000/api/v3/businesses/search?term=food&location=Las Vegas'
  })

  return (dispatch) => {
    return request.then((data) => {
      dispatch({
        type: 'FETCH_RESTAURANTS',
        payload: data
      })
    }).catch((error) => {
      dispatch({
        type: 'FETCH_RESTAURANTS_ERROR',
        payload: error
      })
    })
  }
}

export function fetchRestaurantCategories() {
  const request = axios({
    method: 'get',
    url: 'http://localhost:9000/api/v3/businesses/search?term=food&location=Las Vegas'
  })

  return (dispatch) => {
    return request.then((data) => {
      dispatch({
        type: 'FETCH_RESTAURANTS',
        payload: data
      })
    }).catch((error) => {
      dispatch({
        type: 'FETCH_RESTAURANTS_ERROR',
        payload: error
      })
    })
  }
}

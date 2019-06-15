import axios from 'axios'

export function initialize() {
  return fetchRestaurants()
}

export function fetchRestaurants() {
  const request = axios({
    method: 'get',
    url: 'http://localhost:9000/api/v3/businesses/search?term=food&location=Las Vegas',
  })

  return (dispatch) => {
    return request.then((data) => {
      dispatch({
        type: 'FETCH_RESTAURANTS',
        payload: data,
      })
    }).catch((error) => {
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
    url: `http://localhost:9000/api/v3/businesses/${id}`,
  })

  return (dispatch) => {
    return request.then((data) => {
      dispatch({
        type: 'FETCH_RESTAURANT_DETAILS',
        payload: data,
      })
    }).catch((error) => {
      dispatch({
        type: 'FETCH_RESTAURANT_DETAILS_ERROR',
        payload: error,
      })
    })
  }
}

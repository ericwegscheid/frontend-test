import axios from 'axios'

export function initialize() {
  return fetchDataTest()
}

export function fetchDataTest() {
  const request = axios({
    method: 'get',
    url: 'http://localhost:9000/api/v3/businesses/search?term=food&location=Las Vegas'
  })

  return (dispatch) => {
    return request.then((data) => {
      dispatch({ type: 'FETCH_RANDOM_USER', payload: data})
    }).catch((error) => {
      dispatch({ type: 'FETCH_ERROR' })
    })
  }
}

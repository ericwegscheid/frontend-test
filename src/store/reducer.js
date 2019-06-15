const initialState = {
  title: 'Restaurants',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  isFetchingRestaurants: false,
  isFetchingRestaurantDetails: false,
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
  case 'FETCH_RESTAURANTS':
    return {
      ...state,
      isFetchingRestaurants: true,
    }
  case 'FETCH_RESTAURANTS_ERROR':
    return {
      ...state,
      isFetchingRestaurants: false,
      data: JSON.stringify(action.payload),
    }
  case 'FETCH_RESTAURANT_DETAILS':
    return {
      ...state,
      isFetchingRestaurantDetails: true,
    }
  case 'FETCH_RESTAURANT_DETAILS_ERROR':
    return {
      ...state,
      isFetchingRestaurants: false,
      data: JSON.stringify(action.payload),
    }
  default:
    return state
  }
}

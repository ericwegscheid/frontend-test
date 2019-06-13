const initialState = {
  title: 'Restaurants',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_RESTAURANTS':
    case 'FETCH_RESTAURANTS_ERROR':
      return {
        ...state,
        data: JSON.stringify(action.payload)
      }
    default:
      return state
  }
}

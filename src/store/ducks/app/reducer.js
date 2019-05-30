const initialState = {
  title: 'this is a test',
  user: null
}

export const reducer = (state = initialState, action) => {
  console.log(action.payload)

  switch(action.type) {
    case 'INITIALIZE':
    case 'FETCH_RANDOM_USER':
      console.log(action.payload)

      return {
        ...state,
        data: JSON.stringify(action.payload)
      }
    default:
      return state
  }
}

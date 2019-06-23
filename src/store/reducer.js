import { get } from 'lodash'
import initialState from './state'
import { getPopularCategories } from './utils'

export const reducer = (state = initialState, action) => {
  switch(action.type) {
  case 'SET_CATEGORIES':
    return {
      ...state,
      filter: {
        ...state.filter,
        popularCategories: getPopularCategories(
          get(state, 'mainView.restaurants'),
          action.payload,
        ),
      },
    }
  case 'APPLY_FILTER':
    return {
      ...state,
      filter: {
        ...state.filter,
        ...action.payload,
      },
    }
  case 'FETCH_RESTAURANTS':
    return {
      ...state,
      mainView: {
        ...state.mainView,
        isFetchingRestaurants: true,
        error: null,
      },
    }
  case 'RECEIVED_RESTAURANTS':
    return {
      ...state,
      mainView: {
        ...state.mainView,
        restaurants: get(action, 'payload.data.businesses'),
        isFetchingRestaurants: false,
      },
    }
  case 'FETCH_RESTAURANTS_ERROR':
    return {
      ...state,
      mainView: {
        ...state.mainView,
        restaurants: null,
        isFetchingRestaurants: false,
        error: action.payload,
      },
    }
  case 'FETCH_RESTAURANT_DETAILS':
    return {
      ...state,
      detailView: {
        ...state.detailView,
        isFetchingRestaurantDetails: true,
      },
    }
  case 'RECEIVED_RESTAURANT_DETAILS':
    return {
      ...state,
      detailView: {
        ...state.detailView,
        restaurantDetails: action.payload,
        isFetchingRestaurantDetails: false,
      },
    }
  case 'FETCH_RESTAURANT_DETAILS_ERROR':
    return {
      ...state,
      detailView: {
        ...state.detailView,
        restaurantDetails: action.payload,
        isFetchingRestaurantDetails: false,
        error: action.payload,
      },
    }
  default:
    return state
  }
}

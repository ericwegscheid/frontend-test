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
          get(state, 'mainView.restaurants', []),
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
        error: null,
        isFetchingRestaurants: true,
      },
    }
  case 'RECEIVED_RESTAURANTS':
    return {
      ...state,
      mainView: {
        ...state.mainView,
        isFetchingRestaurants: false,
        restaurants: get(action, 'payload.data.businesses'),
      },
    }
  case 'FETCH_RESTAURANTS_ERROR':
    return {
      ...state,
      mainView: {
        ...state.mainView,
        error: action.payload,
        isFetchingRestaurants: false,
        restaurants: null,
      },
    }
  case 'SET_RESTAURANT_DETAILS': {
    const { category, coordinates, id, is_closed, location, name, price, rating } = action.payload

    return {
      ...state,
      detailsView: {
        ...state.detailsView,
        category,
        coordinates,
        id,
        is_closed,
        location,
        name,
        price,
        rating,
      },
    }
  }
  case 'FETCH_RESTAURANT_DETAILS':
    return {
      ...state,
      detailsView: {
        ...state.detailsView,
        error: null,
        isFetchingRestaurantDetails: true,
      },
    }
  case 'RECEIVED_RESTAURANT_DETAILS':
    return {
      ...state,
      detailsView: {
        ...state.detailsView,
        restaurantDetails: get(action.payload, 'data', {}),
        isFetchingRestaurantDetails: false,
      },
    }
  case 'FETCH_RESTAURANT_DETAILS_ERROR':
    return {
      ...state,
      detailsView: {
        ...state.detailsView,
        error: action.payload,
        isFetchingRestaurantDetails: false,
        restaurantDetails: action.payload,
      },
    }
  case 'FETCH_RESTAURANT_REVIEWS':
    return {
      ...state,
      detailsView: {
        ...state.detailsView,
        error: null,
        isFetchingRestaurantReviews: true,
      },
    }
  case 'RECEIVED_RESTAURANT_REVIEWS':
    return {
      ...state,
      detailsView: {
        ...state.detailsView,
        restaurantReviews: get(action.payload, 'data', {}),
        isFetchingRestaurantReviews: false,
      },
    }
  case 'FETCH_RESTAURANT_REVIEWS_ERROR':
    return {
      ...state,
      detailsView: {
        ...state.detailsView,
        error: action.payload,
        isFetchingRestaurantReviews: false,
        restaurantReviews: action.payload,
      },
    }
  default:
    return state
  }
}

import { each, get, orderBy, slice } from 'lodash'

const initialState = {
  mainView: {
    title: 'Restaurants',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isFetchingRestaurants: false,
    restaurants: null,
    error: null,
  },
  detailView: {
    title: null,
    isFetchingRestaurantDetails: false,
    restaurantDetails: null,
  },
  filter: {
    isOpen: false,
    price: null,
    category: null,
    popularCategories: null,
  },
}

export const getPopularCategories = (restaurants, limit) => {
  let categoriesMap = {}

  each(restaurants, restaurant => {
    each(restaurant.categories, category => {
      const { alias, title } = category

      if (!categoriesMap[alias]) {
        categoriesMap[alias] = {
          title: title,
          count: 1,
        }
      } else {
        categoriesMap[alias].count++
      }
    })
  })

  let categoriesArray = []

  each(categoriesMap, (v, k) => {
    categoriesArray.push({
      alias: k,
      ...v,
    })
  })

  return slice(orderBy(categoriesArray, 'count', 'desc'), 0, limit)
}

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

import { each, get, orderBy, slice } from 'lodash'

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

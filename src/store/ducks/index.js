import { reduce, set } from 'lodash'
import * as app from './app'

export const ducks = {
  app
}

export const reducers = reduce(
  ducks,
  (result, duck, key) => set(result, key, duck.reducer),
  {}
)

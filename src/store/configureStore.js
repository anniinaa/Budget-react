import { createStore, combineReducers } from 'redux'
import entriesReduces from '../reducers/entries.reducers'

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReduces,
    }),
  )
}

export default configureStore

import { createStore, combineReducers } from 'redux'
import entriesReduces from '../reducers/entries.reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import modalsReducer from '../reducers/modals.reducers'

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReduces,
      modals: modalsReducer,
    }),
    composeWithDevTools(),
  )
}

export default configureStore

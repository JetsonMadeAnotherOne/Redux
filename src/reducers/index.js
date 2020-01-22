import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { userReducer } from './user'

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
})


export const initialState = {
  user: { // мы вложили в user вместо строки, объект
    name: 'Василий',
    surname: 'Реактов',
    age: 27,
  },
}

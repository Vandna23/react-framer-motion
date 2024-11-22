import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import nameReducer from './slices/nameSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter', 'update'],
}
const rootReducer = combineReducers({
  counter: counterReducer,
  update: nameReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})
export const persistor = persistStore(store)

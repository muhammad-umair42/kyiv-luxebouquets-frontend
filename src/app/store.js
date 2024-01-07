// store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import cartReducer from './Slices/cartSlice';
import interactionReducer from './Slices/interactionSlice';
import userReducer from './Slices/userSlice';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'cart'], // Specify the reducers you want to persist
};

const rootReducer = combineReducers({
  interaction: interactionReducer,
  user: userReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { persistor, store };

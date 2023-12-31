// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";

import interactionReducer from "./Slices/interactionSlice";
import userReducer from "./Slices/userSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], // Specify the reducers you want to persist
};

const rootReducer = combineReducers({
  interaction: interactionReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };

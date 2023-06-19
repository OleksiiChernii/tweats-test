import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slice";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { filterReducer } from "./filter/slice";

const userPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['following'],
};

export const store = configureStore({
  reducer: {
    users: persistReducer(userPersistConfig, usersReducer),
    filter: filterReducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
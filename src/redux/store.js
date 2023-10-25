import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer
} from 'redux-persist';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice.js';
import { tableReducer } from './contacts/ContactsSlice.js';
import { filterReducer } from './filter/filterSlice.js';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    table: tableReducer,
    filter: filterReducer,
  },
  middleware: [thunk, logger],
});

export const persistor = persistStore(store);
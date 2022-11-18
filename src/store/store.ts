import { apiCall } from './../api/api-call';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { jobsReducer } from './reducer';

const persistConfig = {
  key: 'jobs',
  storage,
};

const persistedReducer = persistReducer(persistConfig, jobsReducer);

const extraArgument = {
  apiCall,
};

const store = configureStore({
  reducer: {
    jobs: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    return defaultMiddleware;
  },
});

const persistor = persistStore(store);

export { store, persistor, extraArgument };

import { configureStore } from '@reduxjs/toolkit';
import { jobsReducer } from './reducer';

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});

export { store };

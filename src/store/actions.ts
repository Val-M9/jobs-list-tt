import { createAsyncThunk } from '@reduxjs/toolkit';
import { JobActions } from './action-types';
import { apiCall } from '../api/api-call';

export const fetchJobs = createAsyncThunk(JobActions.FETCH_JOBS, async () => {
  return await apiCall.getAllJobs();
});

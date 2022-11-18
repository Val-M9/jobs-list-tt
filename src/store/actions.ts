import { JobsDto } from './../common/types/data-types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { JobActions } from './action-types';
import { AsyncThunkConfig } from '../common/types';

export const fetchJobs = createAsyncThunk<JobsDto, void, AsyncThunkConfig>(
  JobActions.FETCH_JOBS,
  async (_, { extra }) => {
    const { apiCall } = extra;
    return await apiCall.getAllJobs();
  },
);

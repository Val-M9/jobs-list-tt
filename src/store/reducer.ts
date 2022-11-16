import { createReducer } from '@reduxjs/toolkit';
import { JobsDto } from './../common/types/data-types';
import { fetchJobs } from './actions';

type JobsState = {
  jobs: JobsDto;
  loading: boolean;
};

const initialState: JobsState = {
  jobs: [],
  loading: false,
};

const jobsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchJobs.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchJobs.fulfilled, (state, { payload }) => {
      state.jobs = payload;
    });
});

export { jobsReducer };

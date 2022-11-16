import { JobsDto, JobInfo } from './../common/types/data-types';
import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../common/types';

const selectAllJobs = (state: AppState) => {
  return state.jobs.jobs;
};

const selectJobById = createSelector(
  [selectAllJobs, (state: AppState, jobId: string) => jobId],
  (jobs: JobsDto, jobId: JobInfo['id']) => {
    const job = jobs.find((item) => item.id === jobId);

    return job;
  },
);

export { selectAllJobs, selectJobById };

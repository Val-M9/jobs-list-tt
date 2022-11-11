import { JobsDto } from './../common/types';

export const filterById = (jobs: JobsDto, id: string) => {
  return jobs.filter((job) => job.id === id)[0];
};

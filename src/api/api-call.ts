import axios from 'axios';
import { BASE_URL } from '../common/constants';
import { JobsDto } from '../common/types';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Authorization': `Bearer ${process.env.REACT_APP_JOBS_API_TOKEN}` },
});

export const apiCall = {
  async getAllJobs(): Promise<JobsDto> {
    const result = await instance.get('/');
    return result.data;
  },

  async fetchMockData() {
    const data = await import('../mock-data/mock-data.json');
    return data.default;
  },
};

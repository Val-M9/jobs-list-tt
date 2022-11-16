import axios from 'axios';
import { TOKEN, BASE_URL } from '../common/constants';
import { JobsDto } from '../common/types';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Authorization': `Bearer ${TOKEN}` },
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

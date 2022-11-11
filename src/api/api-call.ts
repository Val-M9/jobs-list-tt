import axios from 'axios';
import { TOKEN, BASE_URL } from '../common/constants';
import { JobsDto } from '../common/types';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Authorization': `Bearer ${TOKEN}` },
});

export const apiCall = {
  async getAllJobs() {
    const result = await instance.get<JobsDto>('/');
    return result.data;
  },
};

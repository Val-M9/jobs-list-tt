import axios from 'axios';
import { TOKEN, BASE_URL } from '../common/constants';
import { JobsDto } from '../common/types';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Authorization': `Bearer ${TOKEN}` },
});

export const apiCall = {
  async getAllJobs() {
    try {
      const result = await instance.get<JobsDto>('/');
      return result.data;
    } catch (error: any) {
      if (error.response) {
        console.log('Response error:', error.response.data);
      } else if (error.request) {
        console.log('Request error:', error.request);
      } else {
        console.log(error.message);
      }
    }
  },
};

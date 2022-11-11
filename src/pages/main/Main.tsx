import { useEffect, useState } from 'react';
import { apiCall } from '../../api/api-call';
import { JobsDto } from '../../common/types';
import { Card } from '../../components';
import './styles.css';

const Main = () => {
  const [jobs, setJobs] = useState<JobsDto | undefined>([]);
  useEffect(() => {
    (async () => {
      const response = await apiCall.getAllJobs();
      setJobs(response);
    })();
  }, []);

  return (
    <div className="wrapper">
      {jobs?.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  );
};

export { Main };

import { useEffect, useState } from 'react';
import { apiCall } from '../../api/api-call';
import { JobsDto } from '../../common/types';
import { Card, Loader } from '../../components';
import './styles.css';

const Main = () => {
  const [jobs, setJobs] = useState<JobsDto | undefined>();
  console.log(jobs);

  useEffect(() => {
    (async () => {
      const response = await apiCall.getAllJobs();
      setJobs(response);
    })();
  }, []);

  if (!jobs) {
    return <Loader />;
  }

  return (
    <main className="wrapper">
      {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </main>
  );
};

export { Main };

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiCall } from '../../api/api-call';
import { JobInfo } from '../../common/types';
import { filterById } from '../../helpers';
import { Header } from '../../components';
import './styles.css';

const Details = () => {
  const [info, setInfo] = useState<JobInfo | undefined>();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    (async () => {
      const allJobs = await apiCall.getAllJobs();
      if (allJobs && id) {
        const jobInfo = filterById(allJobs, id);
        setInfo(jobInfo);
      }
    })();
  }, [id]);

  console.log('info', info);

  return (
    <main className="details-wrapper">
      <Header />
    </main>
  );
};

export { Details };

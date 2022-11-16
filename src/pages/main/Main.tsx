import { useEffect } from 'react';
// import { apiCall } from '../../api/api-call';
// import { JobsDto } from '../../common/types';
import { Card, Loader } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchJobs } from '../../store/actions';
import { selectAllJobs } from '../../store/selectors';
import './styles.css';

const Main = () => {
  const dispatch = useAppDispatch();
  const jobs = useAppSelector(selectAllJobs);

  useEffect(() => {
    (async () => {
      dispatch(fetchJobs());
    })();
  }, [dispatch]);

  if (!jobs) {
    return <Loader />;
  }

  return (
    <main className="main-wrapper">
      {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </main>
  );
};

export { Main };

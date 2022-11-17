import { FC, useEffect } from 'react';
import { selectAllJobs } from '../../store/selectors';
import { fetchJobs } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Card, Loader, Paginator } from '../../components';
import './styles.css';

const Main: FC = () => {
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
      <Paginator />
    </main>
  );
};

export { Main };

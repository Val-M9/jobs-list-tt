import { useState, useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';
import { apiCall } from '../../api/api-call';
import { JobInfo } from '../../common/types';
import { filterById, getDaysAmount, formatSalary, formatDescription } from '../../helpers';
import { Button, Loader } from '../../components';
import { Header, Carousel, Contacts } from './components';
import './styles.css';

const Details: FC = () => {
  const [info, setInfo] = useState<JobInfo | undefined>();
  const { id } = useParams();
  let posted;
  let salary;
  let description;

  useEffect(() => {
    (async () => {
      const allJobs = await apiCall.fetchMockData();
      //const allJobs = await apiCall.getAllJobs();
      if (allJobs && id) {
        const jobInfo = filterById(allJobs, id);
        setInfo(jobInfo);
      }
    })();
  }, [id]);

  if (info) {
    posted = getDaysAmount(info.createdAt);
    salary = formatSalary(info.salary);
    description = formatDescription(info.description);
  }

  if (!info) {
    return <Loader />;
  }

  return (
    <main className="details-wrapper">
      <div className="details-content">
        <section>
          <Header />
          <div className="top-block">
            <h1 className="details-title">{info.name}</h1>
            <div className="top-info">
              <p>Posted {posted}</p>
              <div className="salary">
                <span>Brutto, per year</span>
                <h2>€ {salary}</h2>
              </div>
            </div>
          </div>
          <section className="description">
            <p>{description?.description}</p>
            <h2 className="responsibilities">Responsibilities</h2>
            <p>{description?.responsibilities}</p>
            <h2 className="benefits">Compensation & Benefits</h2>
            <p>Our physicians enjoy a wide range of benefits, including:</p>
            <ul>
              {description?.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </section>
        <Button className="apply-btn">Apply now</Button>
        <Carousel pictures={info.pictures} />
        <section className="additional-info">
          <h1 className="heading">Additional Info</h1>
          <p className="description">Employment type</p>
          {info.employment_type.map((type) => (
            <Button key={type} className="employment-btn">
              {type}
            </Button>
          ))}
          <p className="description">Benefits</p>
          {info.benefits.map((benefit) => (
            <Button key={benefit} className="benefits-btn">
              {benefit}
            </Button>
          ))}
        </section>
        <Contacts
          center={{ lat: +`${info.location.lat}`, lng: +`${info.location.long}` }}
          name={info.name}
          address={info.address}
          phone={info.phone}
          email={info.email}
        />
      </div>
    </main>
  );
};

export { Details };

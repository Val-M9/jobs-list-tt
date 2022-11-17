import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { selectJobById } from '../../store/selectors';
import { getDaysAmount, formatSalary, formatDescription } from '../../helpers';
import { useAppSelector } from '../../hooks';
import { ArrowBack, Button, Loader } from '../../components';
import { Header, Carousel, Contacts } from './components';
import './styles.css';

type Params = {
  id: string;
};

const Details: FC = () => {
  const { id } = useParams<Params>();
  const jobInfo = useAppSelector((state) => selectJobById(state, id as string));
  const navigate = useNavigate();
  let posted;
  let salary;
  let description;

  if (jobInfo) {
    posted = getDaysAmount(jobInfo.createdAt);
    salary = formatSalary(jobInfo.salary);
    description = formatDescription(jobInfo.description);
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!jobInfo) {
    return <Loader />;
  }

  return (
    <main className="details-wrapper">
      <div className="details-container">
        <section className="details-main-block">
          <Header />
          <Button className="apply-btn btn-top">Apply now</Button>
          <div className="top-block">
            <h1 className="details-title">{jobInfo.title}</h1>
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
            <h2>Responsibilities</h2>
            <p>{description?.responsibilities}</p>
            <h2>Compensation & Benefits</h2>
            <p>Our physicians enjoy a wide range of benefits, including:</p>
            <ul>
              {description?.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <Button className="apply-btn">Apply now</Button>
          <div className="details-additional">
            <Carousel pictures={jobInfo.pictures} />
            <div className="additional-info">
              <h1 className="heading bordered">Additional Info</h1>
              <p className="description pt-4">Employment type</p>
              {jobInfo.employment_type.map((type) => (
                <Button key={type} className="employment-btn">
                  {type}
                </Button>
              ))}
              <p className="description sm:pt-6">Benefits</p>
              {jobInfo.benefits.map((benefit) => (
                <Button key={benefit} className="benefits-btn">
                  {benefit}
                </Button>
              ))}
            </div>
          </div>
          <Button className="return-btn" onClick={() => handleGoBack()}>
            <ArrowBack className="mr-3" />
            Return to job board
          </Button>
        </section>
        <Contacts
          center={{ lat: +`${jobInfo.location.lat}`, lng: +`${jobInfo.location.long}` }}
          name={jobInfo.name}
          address={jobInfo.address}
          phone={jobInfo.phone}
          email={jobInfo.email}
        />
      </div>
    </main>
  );
};

export { Details };

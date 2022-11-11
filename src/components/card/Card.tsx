import { FC } from 'react';
import { JobInfo } from '../../common/types';
import { Bookmark, Marker, Star } from '../../common/svg';
import { getDaysAmount } from '../../helpers';
import './styles.css';

type CardProps = {
  job: JobInfo;
};

const Card: FC<CardProps> = ({ job }) => {
  const posted = getDaysAmount(job.createdAt);

  return (
    <div className="card">
      <div className="photo-wrapper">
        <img className="photo" src={job.pictures[0]} alt="" />
      </div>
      <div className="info">
        <div className="info-additional">
          <div className="rating-block">
            <Star className="rating" />
            <Star className="rating" />
            <Star className="rating" />
            <Star className="rating" />
            <Star className="rating" />
          </div>
          <p>Posted {posted}</p>
          <Bookmark className="bookmark" />
        </div>
        <div className="info-general">
          <h2 className="title">{job.name}</h2>
          <div className="department-location">
            <p className="department">Department name • {job.title}</p>
            <p className="location">
              <Marker />
              <span>{job.address}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };

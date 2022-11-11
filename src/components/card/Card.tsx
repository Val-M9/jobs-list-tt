import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { JobInfo } from '../../common/types';
import { Bookmark, Marker, Star } from '../../common/svg';
import { getDaysAmount } from '../../helpers';
import './styles.css';
import { RoutePath } from '../../common/enums';

type CardProps = {
  job: JobInfo;
};

const Card: FC<CardProps> = ({ job }) => {
  const posted = getDaysAmount(job.createdAt);

  return (
    <NavLink className="card" to={`${RoutePath.DETAILS}${job.id}`}>
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
    </NavLink>
  );
};

export { Card };

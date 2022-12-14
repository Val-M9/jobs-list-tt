import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Bookmark, Mark, Star } from '../svg';
import { getTimeAgo, getRandomRating } from '../../helpers';
import { RoutePath } from '../../common/enums';
import { CardProps } from './types';
import './styles.css';

const Card: FC<CardProps> = ({ job }) => {
  const posted = getTimeAgo(job.createdAt);
  const rating = getRandomRating();

  return (
    <div className="card">
      <div className="photo-wrapper">
        <img className="photo" src={job.pictures[0]} alt="" />
      </div>
      <div className="info">
        <div className="info-secondary">
          <div className="rating-block">
            {rating.map((_, index) => (
              <Star key={index} className="rating" />
            ))}
          </div>
          <p>Posted {posted}</p>
          <Bookmark className="bookmark" />
        </div>
        <div className="info-general">
          <NavLink className="title" to={`${RoutePath.DETAILS}/${job.id}`}>
            {job.name}
          </NavLink>
          <div className="department-location">
            <p className="department">Department name • {job.title}</p>
            <p className="location">
              <Mark />
              <span>{job.address}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };

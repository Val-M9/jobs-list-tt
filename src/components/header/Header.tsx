import { FC } from 'react';
import { Bookmark, Share, Star } from '../svg';
import './styles.css';

const Header: FC = () => {
  return (
    <header className="header">
      <h1 className="heading">Job Details</h1>
      <div className="icons">
        <Star className="star-icon" />
        <Bookmark className="bookmark-icon" />
        <span>Save to my list</span>

        <div>
          <Share />
          <span>Share</span>
        </div>
      </div>
    </header>
  );
};

export { Header };

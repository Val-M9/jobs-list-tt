import { FC } from 'react';
import { Bookmark, Share, Star } from '../../../../components/svg';
import './styles.css';

const Header: FC = () => {
  return (
    <header className="header">
      <h1 className="heading">Job Details</h1>
      <div className="icons">
        <Star className="icon star-icon" />
        <Bookmark className="icon bookmark-icon" />
        <span>Save to my list</span>
        <Share className="icon" />
        <span>Share</span>
      </div>
    </header>
  );
};

export { Header };

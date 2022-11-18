import { FC } from 'react';
import './styles.css';

const Loader: FC = () => {
  return (
    <div className="loader-wrapper">
      <div className="center">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export { Loader };

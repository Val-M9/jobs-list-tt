import { FC } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { GOOGLE_MAPS_API_KEY } from '../../../../common/constants';
import { Loader, Mark } from '../../../../components';
import { MapWithMarker } from '../map/MapWithMarker';
import { ContactsProps } from './types';
import './styles.css';

const Contacts: FC<ContactsProps> = ({ center, name, address, phone, email }) => {
  const renderMap = (status: Status) => {
    switch (status) {
      case Status.LOADING:
        return <Loader />;
      case Status.FAILURE:
        return <h1>Oops... an error occurred</h1>;
      case Status.SUCCESS:
        return <MapWithMarker {...center} />;
    }
  };

  return (
    <section className="contacts-wrapper">
      <h1 className="heading">Contacts</h1>
      <div className="contacts-container">
        <div className="contacts">
          <h2 className="contacts-name">
            Department name.
            <br />
            {name}
          </h2>
          <div className="contacts-info">
            <p>
              <Mark className="mark" />
              <span>{address}</span>
            </p>
            <p>{phone},</p>
            <p>{email}</p>
          </div>
        </div>
        <Wrapper apiKey={GOOGLE_MAPS_API_KEY} render={renderMap} />;
      </div>
    </section>
  );
};

export { Contacts };

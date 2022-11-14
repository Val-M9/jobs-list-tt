import { FC } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { GOOGLE_MAPS_API_KEY } from '../../../../common/constants';
import { Loader } from '../../../../components';
import { MapWithMarker } from '../map/MapWithMarker';
import './styles.css';

type LocationProps = {
  center: google.maps.LatLngLiteral;
};

const Contacts: FC<LocationProps> = ({ center }) => {
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

  return <Wrapper apiKey={GOOGLE_MAPS_API_KEY} render={renderMap} />;
};

export { Contacts };

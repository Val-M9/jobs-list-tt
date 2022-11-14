import { FC } from 'react';
import { Map } from './Map';
import { Marker } from './Marker';
import { mapStyles } from './map-styles';

const MapWithMarker: FC<google.maps.LatLngLiteral> = (center) => {
  return (
    <Map center={center} mapStyles={mapStyles}>
      <Marker
        position={center}
        icon={{
          url: require('../../../../assets/images/marker-icon.png'),
        }}
      />
    </Map>
  );
};

export { MapWithMarker };

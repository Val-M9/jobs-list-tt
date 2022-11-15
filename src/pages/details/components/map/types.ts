import { ReactElement } from 'react';

export interface MapProps extends google.maps.MapOptions {
  children: ReactElement<any, any>;
  center: google.maps.LatLngLiteral;
  mapStyles: google.maps.MapTypeStyle[];
}

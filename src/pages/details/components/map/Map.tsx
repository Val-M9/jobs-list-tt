import React, { ReactElement } from 'react';
import './styles.css';

interface MapProps extends google.maps.MapOptions {
  children: ReactElement<any, any>;
  center: google.maps.LatLngLiteral;
  mapStyles: google.maps.MapTypeStyle[];
}

const Map: React.FC<MapProps> = ({ children, center, mapStyles }) => {
  const [map, setMap] = React.useState<google.maps.Map>();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom: 14,
          disableDefaultUI: true,
          styles: mapStyles,
        }),
      );
    }
  }, [ref, map, center, mapStyles]);

  return (
    <>
      <div ref={ref} className="map" />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // @ts-ignore
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

export { Map };

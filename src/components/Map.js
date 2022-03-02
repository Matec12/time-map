import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { TRACKING_DATA } from './TrackingsData';
import TrackerMarker from './TrackerMarker';
import { formatUTCDate } from '../utils/utils';


const Map = () => {
  
  const API_KEY = "AIzaSyBcLSMRB3EJnxl5SFrW4OEXhvLoPKl2pbw"

  const markers =
  TRACKING_DATA &&
  TRACKING_DATA?.map((curr, index) => {
    return <TrackerMarker data={curr} key={index} lat={curr.lat} lng={curr.lng} time={formatUTCDate(curr.dateTime)} />;
  });

  const trackings = () => {
    let newArray = [];
    TRACKING_DATA &&
    TRACKING_DATA?.forEach((line)=> {
      newArray.push({lat: line.lat, lng:line.lng})
    })
    return newArray
  };

  const handleApiLoaded = (map, maps) => {
    trackings();

    var poly = new maps.Polyline({
      path: trackings(),
      strokeColor: 'warning',
      strokeOpacity: 0.8,
      strokeWeight: 4,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
    });
  
    poly.setMap(map);
  }
  return(
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: API_KEY
        }}
        defaultZoom={12}
        defaultCenter={{lat: 6.5505329, lng:  3.3768363}}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        yesIWantToUseGoogleMapApiInternals
      >
        {markers}
      </GoogleMapReact>
  </div>
  )
}

export default Map;
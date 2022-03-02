import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'

function TrackerMarker({ data, lat, lng, onClick, time }) {
  return (
    <div className="location-maker">
      <p
        style={{
          backgroundColor: '#fff',
          width: '10px',
          height: '10px',
          marginBottom: 20,
          fontSize: 15,
          fontWeight: 'bold',
          textTransform: 'uppercase',
          boxShadow: `rgb {(158 158 158 / 24%)} 0px 0px 2px 0px, rgb(158 158 158 / 24%) 0px 20px 40px -4px`,
        }}
      >
        <span>{time}</span>
      </p>
      <FaMapMarkerAlt style={{
        color: 'blue',
        fontSize: '20px'
      }}/>
    </div>
  );
}

export default TrackerMarker;
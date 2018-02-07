import React from 'react';
import PropTypes from 'prop-types';

function TourDate(props) {

  return(
    <div style={{marginLeft: '50px'}}>
      <h2 style={{color: '#008F59'}}>{props.day}</h2>
      <ul style={{listStyle: 'none'}}>
        <li>Location: {props.location}</li>
        <li>Hours: {props.hours}</li>
        <li>Booth: {props.booth}</li>
      </ul>
    </div>
  );
}

TourDate.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default TourDate;

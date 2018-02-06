import React from 'react';
import PropTypes from 'prop-types';

function TourDate(props) {

  return(
    <div>
      <h2>{props.day}</h2>
      <ul>
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

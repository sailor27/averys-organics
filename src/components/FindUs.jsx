import React from 'react';
import TourDate from './TourDate';

const masterTourSchedule = [
  {
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
];

function FindUs(){
  const findStyles = {
    backgroundColor: '#fffafa',
    width: '40%',

  };
  return(
    <div style={findStyles}>
      <h1 style={{textAlign: 'center'}}>Find us</h1>
      {masterTourSchedule.map((date, index) =>
        <TourDate day={date.day}
          location={date.location}
          hours={date.hours}
          booth={date.booth}
          key={index}/>
      )}
    </div>
  );
}

export default FindUs;

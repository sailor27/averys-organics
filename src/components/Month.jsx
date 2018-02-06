import React from 'react';
import PropTypes from 'prop-types';

function Month(props){
  return(
    <div>
      <h2>{props.name}</h2>
      <ul>
        <li>{props.selection}</li>
      </ul>
    </div>
  );
}

Month.propTypes = {
  name: PropTypes.string,
  selection: PropTypes.array
};

export default Month;

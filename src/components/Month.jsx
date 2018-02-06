import React from 'react';
import PropTypes from 'prop-types';


function Month(props){
  const selections = props.selection;
  const listItems = selections.map((item) =>
    <li>{item}</li>
  );

  return(
    <div>
      <h2>{props.name}</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

Month.propTypes = {
  name: PropTypes.string,
  selection: PropTypes.array
};

export default Month;

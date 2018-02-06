import React from 'react';
import PropTypes from 'prop-types';


function Month(props){
  const selections = props.selection;
  const listItems = selections.map((item, index) =>
    <li key={index}>{item}</li>
  );

  return(
    <div style={{marginLeft: '50px'}}>
      <h2>{props.name}</h2>
      <ul className="hide"style={{listStyle: 'none'}}>{listItems}</ul>
      <style jsx>{`
        .hide{
          display: none;
        }
      `}</style>
    </div>
  );
}

Month.propTypes = {
  name: PropTypes.string,
  selection: PropTypes.array
};

export default Month;

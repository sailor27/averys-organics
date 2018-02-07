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
      <ul className="hide"style={{listStyle: 'none', padding:'0px'}}>{listItems}</ul>
      <style jsx>{`
        .hide{
          display: none;
        }

        h2:hover + ul, ul:hover{
          display:block;
          background-color: white;
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

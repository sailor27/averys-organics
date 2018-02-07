import React from 'react';
import PropTypes from 'prop-types';


function Month(props){
  const selections = props.selection;
  const listItems = selections.map((item, index) =>
    <li key={index}>{item}</li>
  );

  return(
    <div style={{marginLeft: '50px'}} >
      <div  className="flexy">
        <h2 style={{marginRight: '50px', padding: '10px'}}>{props.name}</h2>
        <ul className="hide"style={{listStyle: 'none', padding:'0px'}}>{listItems}</ul>
      </div>
      <style jsx>{`
        .flexy {
          display:flex;
          justify-content: space-between;

        }
        .hide{
          display: none;
        }
        h2:hover + ul, ul:hover{
          display:block;
          background-color: white;
          padding-top: 10px;
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

import React from 'react';
import Header from './Header';
import Produce from './Produce';
import FindUs from './FindUs';

function App() {
  return (
    <div>
      <style jsx global>{`
        h1:hover {
          color: #EB6EBD;
        }
        h2:hover{
          color: #008F59;
        }
        body{
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          color: #0E0406;
          font-family: 'Source Code Pro', monospace;
          background: url("https://images.freecreatives.com/wp-content/uploads/2015/04/white-paper-texture-with-flecks.jpg") no-repeat fixed center
        }
        body:before {
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
          background-color: rgba(82, 42, 0, 0.18);
          z-index: -1;
          top: 0;
          bottom: 0;
        }
        .container {
          max-width: 1200px;
          margin: auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
    `}</style>
      <div className="container">
        <Header />
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          <FindUs style={{width: '350px'}} />
          <Produce style={{width: '350px'}} />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';

function Header() {
  const headerStyles = {
    // backgroundColor: '#0E0406',
    textAlign: 'center',
    fontFamily: 'corben',
    width: '100%',
    fontSize: '36px'
  };

  return (
    <div style={headerStyles}>
      <h1>avery's organics</h1>
      <h3 style={{fontFamily: 'Source Code Pro', fontWeight: 'bold'}}>Quality organic farm in Portland, OR</h3>
    </div>
  );
}

export default Header;

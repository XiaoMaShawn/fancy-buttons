import React, { useState } from 'react';

function AngryButton() {

  const [anger, setAnger] = useState(0);

  return (
    <button className='AngryButton' style={{ backgroundColor: `rgba(255,0,0,${anger})` }}>

      {/* If you have NOT reached the maximum */}
      {anger < 1 && <span>Don't click me too much! </span>}


      {/* If you HAVE reached the maximum */}
      {anger > 1 && <span>Rawr!</span>}

    </button>
  );
};

export default AngryButton;

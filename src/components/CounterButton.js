import React, { useState } from 'react';

function CounterButton() {

  const [clickAmount, setClikcAmount] = useState(0);

  const handleClick = () => { setClikcAmount(clickAmount + 1) }

  return (

    <button className='CounterButton' onClick={handleClick}>
      you click me {clickAmount} amount of times
    </button>

  );
};

export default CounterButton;
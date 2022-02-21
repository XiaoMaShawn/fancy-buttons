import React, { useState } from 'react';

function CounterButton() {

  const [clickAmount, setClikcAmount] = useState(0);

  return (

    <button className='CounterButton'>
      you click me {clickAmount} amount of times
    </button>

  );
};

export default CounterButton;
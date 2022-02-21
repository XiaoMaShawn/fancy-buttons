import React, { useState } from 'react';
import App from '../App';

function LightSwitchButton(props) {

  // since we get light/setLight from the parent conponent App.js, we don't need the line below
  // const [light, setLight] = useState('off');

  const { light, setLight } = props;

  // const handleClick = () => {
  //   if (light === 'on') {
  //     setLight('off')
  //   } else {
  //     setLight('on')
  //   }
  // }

  const handleClick = () => { setLight(light === 'on' ? 'off' : 'on') }

  return (

    <button className='LightSwitchButton' onClick={handleClick}>

      {/* When the state is on */}
      {light === 'on' && <span className="on"><i>💡</i> I'm on!</span>}

      {/* When the state is off */}
      {light === 'off' && <span className="off"><i>💡</i> I'm off!</span>}

    </button>

  );
};

export default LightSwitchButton;
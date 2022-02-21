import React from 'react';

function LightSwitchButton(props) {

  // since we get light/setLight from the parent conponent App.js, we don't need the line below
  // const [light, setLight] = useState('off');

  // const { light, setLight } = props;

  const { light, switchLight } = props;

  // const handleClick = () => {
  //   if (light === 'on') {
  //     setLight('off')
  //   } else {
  //     setLight('on')
  //   }
  // }

  // since we got the switchLight function from App.js by props, we don't need this handler below
  // const handleClick = () => { setLight((light === 'on') ? 'off' : 'on') };

  // if you want to ressign the handlerClick again, use the one below
  // const handlerClick = () => switchLight();

  return (

    <button className='LightSwitchButton' onClick={switchLight}>

      {/* When the state is on */}
      {light === 'on' && <span className="on"><i>💡</i> I'm on!</span>}

      {/* When the state is off */}
      {light === 'off' && <span className="off"><i>💡</i> I'm off!</span>}

    </button>

  );
};

export default LightSwitchButton;
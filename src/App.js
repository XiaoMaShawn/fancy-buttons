import './App.css';

import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import TextRepeaterButton from './components/TextRepeaterButton';
import LightSwitchButton from './components/LightSwitchButton';
import { useState } from 'react';

function App() {

  // lifting state up from the light component
  const [light, setLight] = useState('off');

  const switchLight = () => { setLight((light === 'on') ? 'off' : 'on') };

  const dark = (light === 'off') ? 'dark' : '';

  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} switchLight={switchLight} />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;

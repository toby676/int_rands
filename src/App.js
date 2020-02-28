import React from 'react';
import './App.css';
import Player1Sub from './PlayerSub';
import Player1Pub from './PlayerPub';

function App() {
  return (
       <div className="App">
        <h3> Fifa International Randoms</h3>
        <Player1Sub channel='Channel1' name='Toby'/>
        <Player1Pub channel='Channel1'/>

        <Player1Sub channel='Channel2' name='Crofty'/>
        <Player1Pub channel='Channel2'/>
      </div>
  );
}

export default App;

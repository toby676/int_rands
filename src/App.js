import React from 'react';
import './App.css';
import Player1Sub from './PlayerSub';
import Player1Pub from './PlayerPub';

function App() {
  return (
       <div className="App">
        <h3> Hit the publish button to see how many times you've published!</h3>
        <Player1Sub channel='Channel1' />
        <Player1Pub channel='Channel1'/>

        <Player1Sub channel='Channel2'/>
        <Player1Pub channel='Channel2'/>
      </div>
  );
}

export default App;

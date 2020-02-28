import React from 'react';
import './App.css';
import Player1Sub from './Player1Sub';
import Player1Pub from './Player1Pub';
import Player2Sub from './Player2Sub';
import Player2Pub from './Player2Pub';

function App() {
  return (
       <div className="App">
        <h3> Hit the publish button to see how many times you've published!</h3>
        <Player1Sub />
        <Player1Pub />

        <Player2Sub />
        <Player2Pub />
      </div>
  );
}

export default App;

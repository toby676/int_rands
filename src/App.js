import React from 'react';
import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
const pubnub = new PubNub({
  publishKey: process.env.REACT_APP_PUB_KEY,
  subscribeKey: process.env.REACT_APP_SUB_KEY
});
import './App.css';
import PlayButton from './PlayButton'
import Play from './Play'
import PlayWorldCup from './PlayWorldCup'
import HomeLink from './HomeLink'
import ShareBox from './ShareBox'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <PubNubProvider client={pubnub}>
      <Router>
      <div className="App">
        <h3>Fifa International Randoms</h3>
        <br/>
        <h5>Normal Mode</h5>
        <Switch>
          <Route exact path="/">
            <br />
            <PlayButton path="play"/>
          </Route>
          <Route exact path="/play/:id">
            <HomeLink />
            <Play />
            <br />
            <ShareBox />
          </Route>
          <Route exact path="/play">
            <p>You didn't enter a lobby ID</p>
            <PlayButton path="play"/>
          </Route>
        </Switch>
        <br/>
        <br/>
        <h5>World Cup</h5>
        <Switch>
          <Route exact path="/">
            <br />
            <PlayButton path="play_world_cup"/>
          </Route>
          <Route exact path="/play_world_cup/:id">
            <HomeLink />
            <PlayWorldCup />
            <br />
            <ShareBox />
          </Route>
          <Route exact path="/play_world_cup">
            <p>You didn't enter a lobby ID</p>
            <PlayButton path="play_world_cup"/>
          </Route>
      </Switch>
      </div>
    </Router>
    </PubNubProvider>
  );
}

export default App;

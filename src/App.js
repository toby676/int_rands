import React from 'react';
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
  );
}

export default App;

import React from 'react';
import './App.css';
import PlayButton from './PlayButton'
import Play from './Play'
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
        <Switch>
          <Route exact path="/">
            <br />
            <PlayButton />
          </Route>
          <Route exact path="/play/:id">
            <HomeLink />
            <Play />
            <br />
            <ShareBox />
          </Route>
          <Route exact path="/play">
            <p>You didn't enter a lobby ID</p>
            <PlayButton />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

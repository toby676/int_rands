import React from 'react';
import './App.css';
import PlayButton from './PlayButton'
import Play from './Play'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
       <div className="App">
        <h3> Fifa International Randoms</h3>
        <Switch>
          <Route exact path="/">
            <PlayButton />
          </Route>
          <Route exact path="/play/:id">
            <Play />
            <Link to="/">Home</Link>
          </Route>
          <Route exact path="/play">
            <p>You didnt enter a lobby ID</p>
            <Link to="/">Home</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

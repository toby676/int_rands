import React from 'react';
import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import PlayerSub from './PlayerSub';
import PlayerPub from './PlayerPub';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
       <div className="App">
        <h3> Fifa International Randoms</h3>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/play/:id">
            <Play />
            <Link to="/">Home</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <PlayButton id='222'/>
  );
}

function PlayButton(props) {
  let id = props.id
  let url = "/play/" + id

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Link to={url} >Play</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Play() {
  let { id } = useParams();

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <PlayerSub channel='Channel1' name='Toby' id={id}/>
            <PlayerPub channel='Channel1' id={id}/>
          </Col>
          <Col>
            <PlayerSub channel='Channel2' name='Crofty' id={id}/>
            <PlayerPub channel='Channel2' id={id}/>
          </Col>
        </Row>
        </Container>
    </div>
  );
}

export default App;

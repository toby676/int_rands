import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Player1Sub from './PlayerSub';
import Player1Pub from './PlayerPub';

function App() {
  return (
       <div className="App">
        <h3> Fifa International Randoms</h3>
        <Container>
        <Row>
          <Col>
          <Player1Sub channel='Channel1' name='Toby'/>
          <Player1Pub channel='Channel1'/>
          </Col>
          <Col>
          <Player1Sub channel='Channel2' name='Crofty'/>
          <Player1Pub channel='Channel2'/>
          </Col>
        </Row>
        </Container>
      </div>
  );
}

export default App;

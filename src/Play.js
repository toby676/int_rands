import { Container, Col, Row } from 'react-bootstrap';
import React from 'react';
import PlayerSub from './PlayerSub';
import PlayerPub from './PlayerPub';
import { useParams } from "react-router-dom";

export default function Play() {
  let { id } = useParams();

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <PlayerSub channel='Channel1' name='Home' id={id}/>
            <PlayerPub channel='Channel1' id={id}/>
          </Col>
          <Col>
            <PlayerSub channel='Channel2' name='Away' id={id}/>
            <PlayerPub channel='Channel2' id={id}/>
          </Col>
        </Row>
        </Container>
    </div>
  );
}

import { Container, Col, Row } from 'react-bootstrap';
import React from 'react';
import WorldCupPlayerSub from './WorldCupPlayerSub';
import WorldCupPlayerPub from './WorldCupPlayerPub';
import { useParams } from "react-router-dom";

export default function Play() {
  let { id } = useParams();

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <WorldCupPlayerSub channel='Channel1' name='Home' id={id}/>
            <WorldCupPlayerPub channel='Channel1' id={id}/>
          </Col>
        </Row>
        </Container>
    </div>
  );
}

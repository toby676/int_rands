import { Container, Col, Row } from 'react-bootstrap';
import React from 'react';
import { Link } from "react-router-dom";

export default function PlayButton(props) {
  const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
  let url = genRanHex(32)

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Link to={"/" + props.path + "/" + url}>Create Lobby</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

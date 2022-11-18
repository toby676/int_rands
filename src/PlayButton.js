import { Container, Col, Row } from 'react-bootstrap';
import React, { useState }from 'react';
import { Link } from "react-router-dom";

export default function PlayButton(props) {
  const [url, setUrl] = useState("")

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <input
              type="text"
              placeholder="Enter lobby ID here..."
              value={ url }
              onChange={(e) => {
                setUrl(e.target.value)
              }}
            />
            <Link to={"/" + props.path + "/" + url}>Lets GO!</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const RepoNonExist = () => {
  return (
    <Container className='p-3'>
      <Row className="text-center d-flex align-items-center">
        <Col className="col-md-12">
          Sorry, Readme.md cannot be found
        </Col>
      </Row>
    </Container>
  )
}

export default RepoNonExist;
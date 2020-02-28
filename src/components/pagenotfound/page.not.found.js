import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const NotFoundPage = () => {
  return (
    <Container className='p-3'>
      <Row className="text-center d-flex align-items-center">
        <Col className="col-md-12">
          Sorry, Page Not Found
        </Col>
      </Row>
    </Container>
  )
}

export default NotFoundPage;
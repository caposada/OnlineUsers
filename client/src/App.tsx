import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChatBox from './components/ChatBox';
import User from './utils/User';

const user1: User = {
  id: "1",
  name: "Alex"
}

const user2: User = {
  id: "2",
  name: "Bruce"
}

function App() {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <ChatBox user={user1} />
        </Col>
        <Col>
          <ChatBox user={user2} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
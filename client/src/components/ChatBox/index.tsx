import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChatInput from '../ChatInput';
import ChatMessages from '../ChatMessages';
import User from '../../utils/User';

export default function ChatBox(props: { user: User }) {

    return (
        <Container className="mb-3">
            <Row >
                <Col xs="8">
                    <h1>{props.user.name}</h1>
                </Col>
            </Row>
            <Row >
                <Col xs="8">
                    <ChatMessages />
                </Col>
            </Row>
            <Row >
                <Col xs="8" className="mt-3">
                    <ChatInput />
                </Col>
            </Row>
        </Container>
    )
}



import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function ChatInput() {
    const [value, setValue] = React.useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const chattext = value.trim();
        setValue("");
        if (chattext !== "") {
            //props.itemSubmitted(shoppingItem);
        }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Row >
                    <Col >
                        <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                        Name
                        </Form.Label>
                        <Form.Control 
                        id="inlineFormInputName" 
                        placeholder="Say something..." 
                        onChange={e => setValue(e.target.value)}
                        value={value} />
                    </Col>
                    <Col xs="auto" >
                        <Button 
                        type="submit">
                            Chat
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
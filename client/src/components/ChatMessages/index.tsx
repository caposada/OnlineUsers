import React from 'react';
import ChatMessage from '../ChatMessage';
import Message from '../../utils/Message';

const messageAreaStyle: React.CSSProperties = {
    height: '200px',
    padding: '0.375rem 0.75rem',
    overflowY: 'scroll'
}

const message: Message = {
    userId: "1",
    text: "Hello"
}

export default function ChatMessages() {

    return (
        <div 
        className="border rounded"
        style={messageAreaStyle} >
            <ChatMessage message={message}/>
            <ChatMessage message={message} />
            <ChatMessage message={message} />
            <ChatMessage message={message} />
        </div>
    )
}



import React from 'react';
import Message from '../../utils/Message';

export default function ChatMessage(props: { message: Message }) {

    return (
        <div>
            <span><b>{props.message.userId}</b>: </span>
            <span>{props.message.text}</span>
        </div>
    )
}



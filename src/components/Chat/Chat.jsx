import { useState, useEffect } from 'react';

const Chat = ({ socket }) => {
  
    const [chatMessages, setChatMessages] = useState([]);
    useEffect(() => {
        
        socket.on('CHAT_UPDATE', ({ message, userName }) => {
            const chatMessage = `${userName}: ${message}`;
            setChatMessages(prev => ([...prev, chatMessage]));
            
        window.scrollTo(0, document.body.scrollHeight)
})
    }, [socket])

    return <ul id="messages">{
        chatMessages.map((msg, index) => { return <li key={index}>{msg}</li> })
    }</ul>
 };

export default Chat;
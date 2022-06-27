import { useState, useEffect } from 'react';

const Chat = ({ socket }) => {
    const [userName, setUsername] = useState("");
    const [chatMessages, setChatMessages] = useState([]);
    useEffect(() => {
        
        socket.on('CHAT_UPDATE', ({ message, userName }) => {
           
            setChatMessages(prev => ([...prev, message]));
            setUsername(userName);
        window.scrollTo(0, document.body.scrollHeight)
})
    }, [socket])

    return <ul id="messages">{
        chatMessages.map((msg, index) => { return <li key={index}>{userName }:{msg}</li> })
    }</ul>
 };

export default Chat;
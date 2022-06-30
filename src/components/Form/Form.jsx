import { useState, useEffect } from 'react';

const Form = ({ socket }) => {
    const [inputValue, setInputValue] = useState('');
    const [userName, setUsername] = useState("");

    useEffect(() => {
         setUsername(prompt("What is your name?", "Anonymous"));
    }, [])
    const onInputChange = e => { 
        setInputValue(e.currentTarget.value);
    };
    const onFormSubmit = e => {
        e.preventDefault();
        if (inputValue !== '') {
            socket.emit('CHAT_MESSAGE', { message: inputValue, userName });
            setInputValue('');
}
        return;
     };
    return <form action="" onSubmit={onFormSubmit}>
        <input autoComplete="off" name="chatMessage" type="text" value={inputValue} onChange={ onInputChange} /><button>Send</button>
</form>
};

export default Form;
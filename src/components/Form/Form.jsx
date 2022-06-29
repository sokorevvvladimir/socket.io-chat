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
    return <form id ="form" action="" onSubmit={onFormSubmit}>
        <input id="input" autoComplete="off" type="text" value={inputValue} onChange={ onInputChange} /><button>Send</button>
</form>
};

export default Form;
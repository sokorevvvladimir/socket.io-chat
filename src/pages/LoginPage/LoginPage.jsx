import { useState } from 'react';

const LoginPage = () => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onInputChange = e => {
        const { name, value } = e.currentTarget;
        
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default: return;
        }
    };

    const onFormSubmit = e => {
        e.preventDefault();
//dispatch actions
        setEmail('');
        setPassword('');
    };

    return (<form onSubmit={onFormSubmit}>
        <label>Email
            <input  type="text" name="email" required value={ email} onChange={onInputChange}/>
        </label>
        <label>Password
            <input type="password" name="password" required value={ password} onChange={onInputChange}/>
        </label>
        <button type="submit">Register</button>
    </form>)
}

export default LoginPage;
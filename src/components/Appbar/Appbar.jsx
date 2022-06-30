import { NavLink } from "react-router-dom";

const Appbar = () => { 
    return (
        <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/chat">Chat</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
    )
}

export default Appbar;
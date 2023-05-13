import React from "react";
import { useNavigate } from "react-router-dom";


const Nav = () => {
    const navigate = useNavigate('');

    const navigateLogin = () => {
        navigate('/')
    }

    return (
        <nav className="nav">
        <h1>Schedule-Me</h1>
        <button onClick={navigateLogin}>Log Out</button>
        </nav>
    )


}

export default Nav;
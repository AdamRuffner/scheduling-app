import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
//import { handleRegidster } from '../utils/resource'

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username.trim() && password.trim() && email.trim()) {
            console.log(username, password, email);
            setUsername('');
            setPassword('');
            setEmail('');
        }
    };

    return (
      <main className="signup">
        <form className="signup-form">
            <h2 className="signup-title">Create an Account</h2>
            <label htmlFor="email">Email</label>
            <input 
                id='email'
                name='email'
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="username">Username</label>
            <input 
                id='username'
                name='username'
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input 
                id='password'
                name='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="signup-button">Sign Up</button>
            <p>
                Already have an account? {''}
                <Link className="link" to='/'>Sign In</Link>
            
            </p>
        </form>
      </main>  
    );
}

export default Signup;
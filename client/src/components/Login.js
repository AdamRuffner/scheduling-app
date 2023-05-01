import { React, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if (username.trim() && password.trim()) {
            e.preventDefault();
            console.log({username, password})
            setUsername('');
            setPassword('');
        }
    };

    return (
        <main className='login'>
            <form className='login-form'>
                <h2 className='login-title'>Log into your account</h2>
                <label htmlFor='username'>Username</label>
                <input 
                    id='username'
                    name='username'
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='username'
                />
                <label htmlFor='password'>Password</label>
                <input 
                    id='password'
                    name='password'
                    type='password'
                    value={password}
                    onChange={(e => setPassword(e.target.value))}
                    className='password'
                />
                <button className='login-button'>LOG IN</button>
                <p>
                    Don't have an account? {''}
                    <Link className='link' to='/register'>
                        Create One
                    </Link>
                </p>
            </form>
        </main>
    )
}

export default Login;

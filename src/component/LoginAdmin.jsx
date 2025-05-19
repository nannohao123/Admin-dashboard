import { useState } from 'react'
import Logo from '../assets/Logo.png'
import { useNavigate } from 'react-router-dom';

function LoginAdmin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (email && password) {
            navigate('/dashboard');
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center',
            padding: '30px',
        }}>
            {/* Logo */}
            <img
                src={Logo}
                alt="Logo"
                style={{ width: '150px', marginBottom: '50px', marginLeft: '1px' }}
            />

            {/* Email Input */}
            <div style={{ textAlign: 'left' }}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.com"
                    style={{
                        width: '100%',
                        height: '50px',
                        padding: '10px',
                        marginBottom: '20px',
                        boxSizing: 'border-box',
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        color: 'black',
                        border: '1px solid white',
                    }}
                />
            </div>


            {/* Password Input */}
            <div style={{ textAlign: 'left' }}>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="******"
                    style={{
                        width: '100%',
                        height: '50px',
                        padding: '10px',
                        marginBottom: '10px',
                        boxSizing: 'border-box',
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        color: 'black',
                        border: '1px solid white',
                    }}
                />
            </div>

            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: '40px',
            }}>
                <a href="" style={{ color: 'white', fontSize: '13px' }}>Forget password?</a>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                style={{
                    padding: '10px',
                    width: '400px',
                    height: '50px',
                    backgroundColor: '#4D9656',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '12px',
                }}
            >
                Log in
            </button>
        </form>
    );
}

export default LoginAdmin;
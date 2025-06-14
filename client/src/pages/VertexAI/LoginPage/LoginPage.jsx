import React, { useState } from 'react';

import ProfilePic from '/beanhead.svg'
import tongue from '/tongue.svg'

import './LoginPage.css';

const LoginPage = () => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [imageSrc, setImageSrc] = useState(ProfilePic);

    const checkLogin = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/ryan/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: userName, password: password })
            });
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    console.log('Login successful:', data);
                } else {
                    alert(data.message || 'Login failed');
                }
            } else {
                alert('Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <div className="lp-main-box">
                <div className="lp-login-box">
                    <div className="lp-login-header">
                        <div className='picture-container'>
                            <img
                                src={imageSrc}
                                id='profile-pic'
                                onMouseEnter={() => setImageSrc(tongue)}
                                onMouseLeave={() => setImageSrc(ProfilePic)}
                            />
                        </div>
                    </div>
                    <div className="lp-login-inputs">
                        <div className="lp-username">
                            <h3 style={{ marginTop: "0px" }}>Username:</h3>
                            <input
                                type="text"
                                name="username"
                                style={{ fontSize: "14px", height: "38px" }}
                                value={userName}
                                placeholder="Enter your username"
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="lp-password">
                            <h3>Password:</h3>
                            <input
                                type="text"
                                name="password"
                                style={{ fontSize: "14px", height: "38px" }}
                                value={password}
                                placeholder="Enter your password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="lp-login-button">
                        <button className="button-19" role="button" onClick={() => checkLogin()}>Login</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
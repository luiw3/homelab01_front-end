import React from 'react';
import { useNavigate } from 'react-router-dom';


export const Login = () => {

    const navigate = useNavigate();

    const doLogin = () => {
        navigate('/dashboard', {
            state: {
                logged: true
            }
        });
    }
    return (
        <div>
            Login Works autoreload?
            <br />
            <button onClick={doLogin}> LOGIN </button>
        </div>
    )
}
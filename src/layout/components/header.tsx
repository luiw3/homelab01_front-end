import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {
    const [state,setState] = useState('dashboard');
    const navigate = useNavigate();
    const loc = useLocation();
    const doLogout = () => {
        navigate('/login')
    }

    const returnHome = () => {
        navigate('/');
    }

    useEffect(() => {
       setState(() => (loc.pathname === '/' ? 'dashboard': loc.pathname.split('/')[1]))
    },[loc.pathname])
    return (
        <header className="flex justify-between items-center h-full px-6">
                <div onClick={returnHome}> 
                    A HEADER 
                </div>
                {state}
                <div className="grid grid-cols-5 gap-1 h-full">
                    <div className="col-span-4 self-center" style={{ border: "1px solid black" }}>
                        LOGGED USER
                    </div>
                    <div className="h-full flex items-center" style={{ border: "1px solid black" }}>
                        <div onClick={doLogout}>
                             LOGOUT
                        </div>
                    </div>
                </div>
        </header>
    )
}

export default Header;
import React from "react";
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const doLogout = () => {
        navigate('/login')
    }

    return (
        <header className="flex justify-between items-center h-full px-6">
                <div> 
                    A HEADER
                </div>
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
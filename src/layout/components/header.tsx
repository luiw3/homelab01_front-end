import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import { FaBars, FaUser } from "react-icons/fa";

const Header = () => {
    const navigate = useNavigate();
    const doLogout = () => {
        navigate('/login')
    }

    const returnHome = () => {
        navigate('/');
    }
    return (
        <header className="flex justify-between items-center h-full px-6 bg-slate-700 text-white">
                <div onClick={returnHome} className="flex items-center justify-between"> 
                    <div className="block lg:hidden">
                            <FaBars size='2em'/>
                    </div>
                    <span>
                        A HEADER
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span> LOGGED USER </span>
                    <FaUser size='2em' />
                </div>
        </header>
    )
}

export default Header;


{/* <NavLink to="profile" className={({ isActive }) => (isActive ? "bg-slate-600 text-lime-500" : "") + ' basis-full group rounded-lg'}>
            <div className="h-full flex flex-col items-center justify-center transition group-hover:text-lime-500">
                    <FaUser size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 group-hover:-rotate-6 duration-300"/>
                    profile
                </div>
            </NavLink> */}
import React from "react";
import { FaChartPie, FaBtc, FaCheckSquare, FaMoneyBillAlt, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <nav className="flex flex-row flex-wrap justify-between h-full">
            <NavLink to="dashboard" className={({ isActive }) => (isActive ? "bg-slate-600" : "bg-white") + ' basis-full group'} >
                <div className="h-full flex flex-col items-center justify-center transition group-hover:text-red-600">
                    <FaChartPie size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 duration-300" />
                    <span className="duration-1000">profile</span>
                </div>
            </NavLink>
            <NavLink to="cryptos" className="basis-full group">
            <div className="h-full flex flex-col items-center justify-center transition group-hover:text-red-600">
                    <FaBtc size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 duration-300"/>
                    cryptos
                </div>
            </NavLink>
            <NavLink to="goals" className="basis-full group">
            <div className="h-full flex flex-col items-center justify-center transition group-hover:text-red-600">
                    <FaCheckSquare size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 duration-300" />
                    <span >
                        goals
                    </span>
                </div>
            </NavLink>
            <NavLink to="expenses" className="basis-full group">
            <div className="h-full flex flex-col items-center justify-center transition group-hover:text-red-600">
                    <FaMoneyBillAlt size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 duration-300" />
                    expenses
                </div>
            </NavLink>
            <NavLink to="profile" className="basis-full group">
            <div className="h-full flex flex-col items-center justify-center transition group-hover:text-red-600">
                    <FaUser size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 duration-300"/>
                    profile
                </div>
            </NavLink>
        </nav>
    )
}

export default Navigation;
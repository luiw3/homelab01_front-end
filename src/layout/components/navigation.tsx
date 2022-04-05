import React from "react";
import { FaChartPie, FaBtc, FaCheckSquare, FaMoneyBillAlt, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <nav className="flex flex-row flex-wrap justify-between h-full">
            <NavLink to="/" className={({ isActive }) => (isActive ? "bg-slate-600 text-lime-500" : "") + ' basis-full group rounded-lg'} >
                <div className="h-full flex flex-col items-center justify-center transition group-hover:text-lime-500">
                    <FaChartPie size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 group-hover:-rotate-6 duration-300" />
                    <span className="duration-1000">profile</span>
                </div>
            </NavLink>
            <NavLink to="cryptos" className={({ isActive }) => (isActive ? "bg-slate-600 text-lime-500" : "") + ' basis-full group rounded-lg'}>
                <div className="h-full flex flex-col items-center justify-center transition group-hover:text-lime-500">
                        <FaBtc size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 group-hover:-rotate-6 duration-300 "/>
                        cryptos
                </div>
            </NavLink>
            <NavLink to="goals" className={({ isActive }) => (isActive ? "bg-slate-600 text-lime-500" : "") + ' basis-full group rounded-lg'}>
            <div className="h-full flex flex-col items-center justify-center transition group-hover:text-lime-500">
                    <FaCheckSquare size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 group-hover:-rotate-6 duration-300" />
                    <span >
                        goals
                    </span>
                </div>
            </NavLink>
            <NavLink to="expenses" className={({ isActive }) => (isActive ? "bg-slate-600 text-lime-500" : "") + ' basis-full group rounded-lg'}>
            <div className="h-full flex flex-col items-center justify-center transition group-hover:text-lime-500">
                    <FaMoneyBillAlt size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 group-hover:-rotate-6 duration-300" />
                    expenses
                </div>
            </NavLink>
        </nav>
    )
}

export default Navigation;
import React from "react";
import { FaChartPie, FaBtc, FaCheckSquare, FaMoneyBillAlt, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <nav className="flex flex-row flex-wrap justify-between h-full border-r border-black">
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-white" : "text-[#0048ff]") + ' basis-full group rounded-tl-lg'} >
                <div className="h-full flex flex-col items-center justify-center transition group-hover:text-white group-hover:bg-zinc-600 group-hover:rounded-tl-lg">
                    <FaChartPie size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 group-hover:-rotate-6 duration-300" />
                    <span className="duration-1000">profile</span>
                </div>
            </NavLink>
            <NavLink to="expenses" className={({ isActive }) => (isActive ? "text-white" : "text-[#0048ff]") + ' basis-full group '}>
                <div className="h-full flex flex-col items-center justify-center transition group-hover:text-white group-hover:bg-zinc-600">
                    <FaMoneyBillAlt size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 group-hover:-rotate-6 duration-300" />
                    expenses
                </div>
            </NavLink>
            <NavLink to="cryptos" className={({ isActive }) => (isActive ? "text-white" : "text-[#0048ff]") + ' basis-full group'}>
                <div className="h-full flex flex-col items-center justify-center transition group-hover:text-white group-hover:bg-zinc-600">
                    <FaBtc size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 group-hover:-rotate-6 duration-300 " />
                    cryptos
                </div>
            </NavLink>
            <NavLink to="goals" className={({ isActive }) => (isActive ? "text-white" : "text-[#0048ff]") + ' basis-full group rounded-bl-lg'}>
                <div className="h-full flex flex-col items-center justify-center transition group-hover:text-white group-hover:bg-zinc-600 group-hover:rounded-bl-lg">
                    <FaCheckSquare size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 group-hover:-rotate-6 duration-300" />
                    <span >
                        goals
                    </span>
                </div>
            </NavLink>
        </nav>
    )
}

export default Navigation;
import React from "react";
import { Link } from "react-router-dom";
import { FaChartPie, FaBtc, FaCheckSquare, FaMoneyBillAlt, FaUser } from "react-icons/fa";


const Navigation = () => {
    return (
        <nav className="flex flex-row flex-wrap justify-between h-full">
            <Link to="dashboard" className="basis-full group">
                <div className="h-full flex flex-col items-center justify-center transition group-hover:text-red-600">
                    <FaChartPie size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 duration-300" />
                    <span className="duration-1000">profile</span>
                </div>
            </Link>
            <Link to="cryptos" className="basis-full group">
            <div className="h-full flex flex-col items-center justify-center transition group-hover:text-red-600">
                    <FaBtc size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 duration-300"/>
                    cryptos
                </div>
            </Link>
            <Link to="goals" className="basis-full group">
            <div className="h-full flex flex-col items-center justify-center transition group-hover:text-red-600">
                    <FaCheckSquare size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 duration-300" />
                    <span >
                        goals
                    </span>
                </div>
            </Link>
            <Link to="expenses" className="basis-full group">
            <div className="h-full flex flex-col items-center justify-center transition group-hover:text-red-600">
                    <FaMoneyBillAlt size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 duration-300" />
                    expenses
                </div>
            </Link>
            <Link to="profile" className="basis-full group">
            <div className="h-full flex flex-col items-center justify-center transition group-hover:text-red-600">
                    <FaUser size='4em' className="group-hover:-translate-y-1 group-hover:scale-110 duration-300"/>
                    profile
                </div>
            </Link>
        </nav>
    )
}

export default Navigation;
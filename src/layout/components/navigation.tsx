import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="flex flex-row flex-wrap">
            <Link to="dashboard" className="basis-full">
                Dashboard
            </Link>
            <Link to="cryptos" className="basis-full">
                Cryptos
            </Link>
            <Link to="goals" className="basis-full">
                Goals!
            </Link>
            <Link to="expenses" className="basis-full">
                Expenses
            </Link>
        </nav>
    )
}

export default Navigation;
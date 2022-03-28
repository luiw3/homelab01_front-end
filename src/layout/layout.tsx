import React from "react";
import { Outlet} from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import Navigation from "./components/navigation";


export const BaseLayout = () => {

    return (
        <div className="w-full p-4 h-5/6">
            <div className="h-20 mb-4" style={{ border: "1px solid black" }}>
                <Header />
            </div>
            <div className="grid grid-cols-10 grid-rows-6 gap-1 justify-center h-full">
                <div className="row-span-6 col-span-1 justify-self-start max-w-xs hidden lg:block" style={{ border: "1px solid black" }}>
                    <Navigation />
                </div>
                <div className="row-span-6 lg:col-span-9 col-span-10" style={{ border: "1px solid black" }}>
                    <Main>
                        <Outlet />
                    </Main>
                </div>
            </div>
        </div >
    )
}


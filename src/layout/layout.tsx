import React from "react";
import { Outlet} from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import Navigation from "./components/navigation";


export const BaseLayout = () => {

    return (
        <div className="h-full">
            <div className="h-20 mb-4 w-full" style={{ border: "1px solid black" }}>
                <Header />
            </div>
            <div className="grid grid-cols-10 grid-rows-6 gap-2 justify-center h-5/6 lg:pr-6">
                <div className="row-span-6 col-span-1 justify-self-start max-w-xs hidden lg:block rounded-tr-lg rounded-br-lg bg-slate-700" style={{ border: "1px solid black" }}>
                    <Navigation />
                </div>
                <section className="row-span-6 lg:col-span-9 col-span-10 bg-slate-700 rounded-lg" style={{ border: "1px solid black" }}>
                    <Main>
                        <Outlet />
                    </Main>
                </section>
            </div>
        </div >
    )
}


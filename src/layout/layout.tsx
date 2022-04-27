import React from "react";
import { Outlet} from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import Navigation from "./components/navigation";


export const BaseLayout = () => {

    return (
        <>  
            <div className="grid grid-rows-10 grid-cols-14 justify-center h-full">
                <header className="col-span-13 col-start-2 max-h-14 mb-3 w-full" style={{ border: "1px solid black" }}>
                    <Header />
                </header>
                <aside className="justify-self-start row-start-1 row-span-full max-w-xs hidden lg:block rounded-tl-lg rounded-bl-lg bg-[#1a1829]">
                    <Navigation />
                </aside>
                <Main>
                    <Outlet />
                </Main>
                </div>

        </>
    )
}


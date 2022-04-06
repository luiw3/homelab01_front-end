import React from "react";
import { Outlet} from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import Navigation from "./components/navigation";


export const BaseLayout = () => {

    return (
        <>
            <header className="h-20 mb-4 w-full" style={{ border: "1px solid black" }}>
                <Header />
            </header>
            <main className="grid grid-cols-10 grid-rows-6 gap-2 justify-center h-5/6 lg:pr-6">
                <aside className="row-span-6 col-span-1 justify-self-start max-w-xs hidden lg:block rounded-tr-lg rounded-br-lg bg-neutral-400" style={{ border: "1px solid black" }}>
                    <Navigation />
                </aside>
                <Main>
                    <Outlet />
                </Main>
            </main>
        </>
    )
}


import React, { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const Main = (props: {children: ReactNode}) => {
    const [state,setState] = useState('dashboard');
    const loc = useLocation();

    useEffect(() => {
        setState(loc.pathname === '/' ? 'dashboard' : loc.pathname.split('/')[1])
    },[loc.pathname])

    return (
        <main className="h-full">
            <header className="w-full h-[9%] border-solid border-2 border-sky-500">
                {state}
            </header>
            <section className="h-[91%]">
                {props.children}
            </section>
        </main>
    )
}

export default Main;

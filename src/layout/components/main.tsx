import React, { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "./breadcrumb";


const Main = (props: {children: ReactNode}) => {
    const [state,setState] = useState('dashboard');
    const loc = useLocation();

    useEffect(() => {
        setState(loc.pathname === '/' ? 'dashboard' : loc.pathname.split('/')[1])
    },[loc.pathname])

    return (
        <section className="h-full row-span-6 lg:col-start-3 lg:col-span-7 col-span-10 bg-slate-600 lg:rounded-tr-lg lg:rounded-br-lg">
            <Breadcrumb currentPath={state} showAction={state !== 'dashboard'}/>
            <section className="h-[91%]">
                {props.children}
            </section>
        </section>
    )
}

export default Main;

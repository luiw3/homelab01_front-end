import React, { ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import Breadcrumb from "./breadcrumb";


const Main = (props: {children: ReactNode}) => {
    const [state,setState] = useState('dashboard');
    const loc = useLocation();
    const nav = useNavigate();

    useEffect(() => {
        setState(loc.pathname === '/' ? 'dashboard' : loc.pathname.split('/')[1])
    },[loc.pathname])

    const openForm = () => {
        nav(state + '/add');
    }

    return (
        <section className="h-full row-span-6 lg:col-start-3 lg:col-span-7 col-span-10 bg-slate-600 lg:rounded-tr-lg lg:rounded-br-lg">
            <Breadcrumb currentPath={state} showAction={state !== 'dashboard'} goToForm={openForm} isInForm={loc.pathname.includes('/add')}/>
            <section className="h-[91%]">
                {props.children}
            </section>
        </section>
    )
}

export default Main;

import React, { ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import Breadcrumb from "./breadcrumb";


const Main = (props: {children: ReactNode}) => {

    return (
        <section className="h-full row-span-8 mt-5 lg:col-start-3 lg:col-span-11 col-span-10 bg-slate-600 lg:rounded-lg">
            <section className="h-[91%]">
                {props.children}
            </section>
        </section>
    )
}

export default Main;

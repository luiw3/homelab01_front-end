import React, { ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import Breadcrumb from "./breadcrumb";


const Main = (props: {children: ReactNode}) => {

    return (
        <section className="h-full row-span-9 lg:col-start-2 lg:col-span-13 col-span-10 lg:rounded-lg">
                {props.children}
        </section>
    )
}

export default Main;

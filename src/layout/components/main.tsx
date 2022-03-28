import React, { ReactNode } from "react";


const Main = (props: {children: ReactNode}) => {

    return (
        <main>
            {props.children}
        </main>
    )
}

export default Main;

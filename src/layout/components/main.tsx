import React, { ReactNode } from "react";


const Main = (props: {children: ReactNode}) => {

    return (
        <main className="h-full">
            {props.children}
        </main>
    )
}

export default Main;

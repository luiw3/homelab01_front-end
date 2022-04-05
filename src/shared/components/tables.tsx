import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

interface IProps<T> {
    renderItem: (items: T) => React.ReactNode;
    items: T[];
    headers: Array<string>;
}

interface test {
    id: string
}
export const TableComponent = <T extends test>(props: IProps<T>) => {
    const [state, setState] = useState(false);
    useEffect(() => {
        let timer = setTimeout(() => {
            setState(true)
        }, 2000)

        return () => {
            clearTimeout(timer)
        }
    }, [])
    return (
        <div className="grid grid-cols-1 grid-rows-6 w-full h-full">

            {state ?
                <>
                    <div className="col-span-full flex justify-center items-center">
                        filtros
                    </div>
                    <div className="w-full row-span-4">
                        <table className="table-auto w-[98.5%] m-auto border-separate shadow-xl">
                            <thead className="rounded-tr-lg rounded-tl-lg">
                                <tr className="text-left">
                                    {props.headers.map((h, i) => (
                                        <th key={h + i} className="bg-blue-100 border text-left px-8 py-4">
                                            {h.toUpperCase()}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.items.map((item) => {
                                        return (
                                            <tr key={item.id} className="rounded-lg">
                                                {props.renderItem(item)}
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </> : <div className="h-20 w-20 self-center justify-self-center row-span-6 text-lime-500">
                    <FaSpinner size='4em' className="animate-spin"/>
                </div>}
        </div>
    )
}
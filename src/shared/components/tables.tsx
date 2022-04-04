import React from "react";

interface IProps<T> {
    renderItem: (items: T) => React.ReactNode;
    items: T[];
    headers: Array<string>;
}

interface test {
    id: string
}
export const TableComponent = <T extends test>(props: IProps<T>) => {
    return (
            <div className="grid w-full">
                <div className="col-span-full flex justify-center items-center">
                        filtros
                </div>
                <table className="table-auto w-[96.5%] rounded-lg m-auto border-separate shadow-lg" style={{border: '1px solid black'}}>
                        <thead>
                            <tr className="text-left rounded-lg">
                                {props.headers.map((h,i) => (
                                    <th key={h + i} className="bg-blue-100 border text-left px-8 py-4">
                                        {h.toUpperCase()}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.items.map((item) =>  {
                                return (
                                    <tr key={item.id} className="rounded-lg">
                                        {props.renderItem(item)}
                                    </tr>
                                )})
                            }
                        </tbody>
                </table>
            </div>
    )
}
import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { Column, TableInstance, useTable } from "react-table";
import { EScreens } from "../enum";
import Filter from "./filter";

interface IProps<T> {
    tableInstance: TableInstance<any>;
    type: EScreens;
}

interface test {
    id: string
}
export const TableComponent = <T extends test>(props: IProps<T>) => {
    const [state, setState] = useState(false);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = props.tableInstance;
    useEffect(() => {
        let timer = setTimeout(() => {
            setState(true)
        }, 2000)

        return () => {
            clearTimeout(timer)
        }
    }, []);

    return (
        <div className="grid grid-cols-1 grid-rows-6 w-full h-full">

            {state ?
                <>
                    <div className="col-span-full flex justify-center items-center">
                        <Filter type={props.type}/>
                    </div>
                    <div className="w-full row-span-4">
                        <table className="table-auto w-[98.5%] m-auto border-separate shadow-xl" {...getTableProps()}>
                            <thead className="rounded-tr-lg rounded-tl-lg">
                               {// Loop over the header rows
                                headerGroups.map(headerGroup => (
                                    // Apply the header row props
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                    {// Loop over the headers in each row
                                    headerGroup.headers.map(column => (
                                        // Apply the header cell props
                                        <th {...column.getHeaderProps()}>
                                        {// Render the header
                                        column.render('Header')}
                                        </th>
                                    ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                 {// Loop over the table rows
                                    rows.map(row => {
                                        // Prepare the row for display
                                        prepareRow(row)
                                        return (
                                        // Apply the row props
                                        <tr {...row.getRowProps()}>
                                            {// Loop over the rows cells
                                            row.cells.map(cell => {
                                            // Apply the cell props
                                            return (
                                                <td {...cell.getCellProps()}>
                                                {// Render the cell contents
                                                cell.render('Cell')}
                                                </td>
                                            )
                                            })}
                                        </tr>
                                        )
                                    })}
                            </tbody>
                        </table>
                    </div>
                </> : <div className="h-20 w-20 self-center justify-self-center row-span-6 text-blue-700">
                    <FaSpinner size='4em' className="animate-spin"/>
                </div>}
        </div>
    )
}


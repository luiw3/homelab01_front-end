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
                <div className="w-11/12 h-5/6 m-auto row-span-4 mt-14">
                    
                        <div className="w-full h-full grid grid-rows-6 lg:grid-rows-2 grid-cols-12 gap-14 justify-between pl-15">
                            <div className="col-span-12 row-start-3 row-span-4 lg:row-start-1 lg:row-span-2 lg:col-span-9 sm:rounded-md shadow overflow-hidden border-gray-200 border"> 
                            {state ?
                                <table className="min-w-full divide-y-1 divide-white" {...getTableProps()}>
                                    <thead className="bg-blue-900 text-white">
                                        {// Loop over the header rows
                                            headerGroups.map(headerGroup => (
                                                // Apply the header row props
                                                <tr {...headerGroup.getHeaderGroupProps()}>
                                                    {// Loop over the headers in each row
                                                        headerGroup.headers.map(column => (
                                                            // Apply the header cell props
                                                            <th {...column.getHeaderProps()} scope="col" className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider">
                                                                {// Render the header
                                                                    column.render('Header')}
                                                            </th>
                                                        ))}
                                                </tr>
                                            ))}
                                    </thead>
                                    <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
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
                                                                    <td {...cell.getCellProps()} className="px-6 py-3 text-left text-white last:w-10">
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
                                : 
                                    <div className="h-full w-full grid"> 
                                        <div className="h-20 w-20 self-center justify-self-center row-span-6 text-blue-700">
                                            <FaSpinner size='4em' className="animate-spin" />
                                        </div>
                                    </div>
                                    }
                            </div>
                            <div className="col-span-12 row-start-1 row-span-2 lg:col-start-10 lg:row-span-2 lg:col-span-3 h-full border-2 border-red-800">
                                <Filter type={props.type} />
                            </div>
                        </div>
                </div>
    )
}


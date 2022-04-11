import React from 'react';
import { Column, useTable } from 'react-table';
import { TableComponent } from '../../shared/components';
import { EScreens } from '../../shared/enum';
import { ICrypto } from '../../shared/interfaces';
import { FaEdit, FaTrash } from 'react-icons/fa';
export const Cryptos = () => {
    let data: Array<ICrypto> = [{
        fiatValue: 10,
        amount: 10,
        token: 'BTC',
        purchasingDate: new Date(),
        id: 'a'
    },
    {
        fiatValue: 11,
        amount: 12,
        token: 'EYH',
        purchasingDate: new Date(),
        id: 'b'
    },
    {
        fiatValue: 1553,
        amount: 1,
        token: 'VET',
        purchasingDate: new Date(),
        id: 'c'
    }]

        let columns: Array<Column<ICrypto>> = [
        {
            Header: 'Token',
            accessor: 'token'
        },
        {
            Header: 'Fiat Value',
            accessor: row  => "R$" + row.fiatValue
        },
        {
            Header: 'Amount',
            accessor: 'amount'
        },
        {
            Header: 'Purchasing Date',
            accessor: row => row.purchasingDate.toLocaleString()
        },
        {
            Header: 'Action',
            accessor: row => <div className='flex justify-between'> <FaEdit/> <FaTrash /> </div>
        },
    ]

    const tableInstance = useTable({ columns, data})
    return (
            <TableComponent tableInstance={tableInstance}
            type={EScreens.CRYPTO}/>
    )
}
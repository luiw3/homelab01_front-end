import React from 'react';
import { Column, useTable } from 'react-table';
import { TableComponent } from '../../shared/components';
import { EScreens } from '../../shared/enum';
import { ICrypto } from '../../shared/interfaces';

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
    }]

        let columns: Array<Column<ICrypto>> = [{
            Header: 'Amount',
            accessor: 'amount'
        },
        {
            Header: 'Fiat Value',
            accessor: 'fiatValue'
        },
        {
            Header: 'Token',
            accessor: 'token'
        },
        {
            Header: 'Purchasing Date',
            accessor: row => row.purchasingDate.toLocaleString()
        },
    ]

    const tableInstance = useTable({ columns, data})
    return (
            <TableComponent tableInstance={tableInstance}
            type={EScreens.CRYPTO}/>
    )
}
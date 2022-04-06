import React from 'react';
import { TableComponent } from '../../shared/components';
import { EScreens } from '../../shared/enum';
import { IExpense } from '../../shared/interfaces';
import { EExpenseType, EPaymentMethod} from '../../shared/enum';
import { Column, useTable } from 'react-table';

export const Expenses = () => {
    const expenses: IExpense[] = [];

    const headers: Array<string> = ['name','expense date', 'expense type', 'payment method', 'value'];


    let data: Array<IExpense> = [{
        name: 'conta de lux',
        id: '232',
        expenseDate: new Date(),
        expenseType: EExpenseType.HOUSE,
        paymentMethod: EPaymentMethod.DEBIT,
        value: 23
    }]

        let columns: Array<Column<IExpense>> = [{
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Expense Date',
             accessor: row => row.expenseDate.toLocaleString()
        },
        {
            Header: 'Expense Type',
            accessor: 'expenseType'
        },
        {
            Header: 'Payment Method',
            accessor: 'paymentMethod'
        },
        {
            Header: 'Value',
            accessor: 'value'
        },
    ]

    const tableInstance = useTable({ columns, data})
    return (
        <TableComponent
            tableInstance={tableInstance}
            type={EScreens.EXPENSES}
        />
    )
}
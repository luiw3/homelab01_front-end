import React from 'react';
import { TableComponent } from '../../shared/components';
import { EExpenseType, EPaymentMethod, IExpense } from '../../shared/interfaces/expenses.interface';

export const Expenses = () => {
    const expenses: IExpense[] = [{
        id: '232',
        expenseDate: new Date(),
        expenseType: EExpenseType.HOUSE,
        paymentMethod: EPaymentMethod.DEBIT,
        value: 23
    }];

    const headers: Array<string> = ['id', 'expense date', 'expense type', 'payment method', 'value'];
    return (
        <TableComponent
            items={expenses}
            renderItem={(item) => (
                <>
                    <td className="border px-8 py-4">
                        {item.id}
                    </td>
                    <td className="border px-8 py-4">
                        {item.expenseDate.toDateString()}
                    </td>
                    <td className="border px-8 py-4">
                        {item.expenseType}
                    </td>
                    <td className="border px-8 py-4">
                        {item.paymentMethod}
                    </td>
                    <td className="border px-8 py-4">
                        {item.value}
                    </td>
                </>
            )}
            headers={headers}
        />
    )
}
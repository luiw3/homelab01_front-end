import React from 'react';
import { TableComponent } from '../../shared/components';
import { IGoal } from '../../shared/interfaces/goals.interface';

export const Goals = () => {
    const goals: IGoal[] = [{
        id: '232',
        goal: 'sucesso',
        amountNeeded: 12,
        targetDate: new Date(),
        totalSaved: 10
    }];

    const headers: Array<string> = ['id', 'goal', 'amount needed', 'target date', 'total saved'];
    return (
        <TableComponent
            items={goals}
            renderItem={(item) => (
                <>
                    <td className="border px-8 py-4">
                        {item.id}
                    </td>
                    <td className="border px-8 py-4">
                        {item.targetDate.toDateString()}
                    </td>
                    <td className="border px-8 py-4">
                        {item.amountNeeded}
                    </td>
                    <td className="border px-8 py-4">
                        {item.goal}
                    </td>
                    <td className="border px-8 py-4">
                        {item.totalSaved}
                    </td>
                </>
            )}
            headers={headers}
        />
    )
}
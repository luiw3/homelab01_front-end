import React from 'react';
import { TableComponent } from '../../shared/components';
import { EScreens } from '../../shared/enum';
import { IGoal } from '../../shared/interfaces';

export const Goals = () => {
    const goals: IGoal[] = [{
        id: '232',
        goal: 'sucesso',
        amountNeeded: 12,
        targetDate: new Date(),
        totalSaved: 10
    }];

    const headers: Array<string> = ['goal', 'amount needed', 'target date', 'total saved'];
    return (
        <> a </>
    )
}
import React from 'react';
import { EScreens } from '../../enum';

interface IFilterProps {
    type: EScreens
}

const CryptoFilter = () => {
    return (
        <div className='h-full flex flex-col p-2'>
            {/* <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label> */}
            <input type="text" placeholder='TOKEN'/> 
            <input type="date" placeholder='DATE'/> 
        </div>
    );
}

const ExpensesFilter = () => {
    return (
        <div className='h-full flex flex-col p-2'>
            <input type="text" placeholder='NAME'/> 
            <input type="date" placeholder='DATE'/> 
            <input type="text" placeholder='TYPE'/> 
            <input type="text" placeholder='METHOD'/> 
        </div>
    )
}

const GoalsFilter = () => {

    return (
        <div className='h-full flex flex-col'>
            <input type="text" placeholder='GOAL'/>
            <input type="date" placeholder='DATE'/> 
            <input type="text" placeholder='TARGET DATE'/> 
        </div>
    )
}
const Filter = ({ type }: IFilterProps) => {
    switch (type) {
        case EScreens.CRYPTO:
            return <CryptoFilter />;
        case EScreens.EXPENSES:
            return <ExpensesFilter />;
        case EScreens.GOALS:
            return <GoalsFilter />;
    }
}

export default Filter;
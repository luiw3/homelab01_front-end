import React from 'react';
import { EScreens } from '../enum';

interface IFilterProps {
    type: EScreens
}
const Filter = ({ type }: IFilterProps) => {

    let filterElement: JSX.Element

    switch (type) {
        case EScreens.CRYPTO:
            filterElement = <div>
                <input type="text" placeholder='TOKEN'/> 
                <input type="date" placeholder='DATE'/> 
            </div>
            break;
        case EScreens.EXPENSES:
            filterElement = <div>
                <input type="text" placeholder='NAME'/> 
                <input type="date" placeholder='DATE'/> 
                <input type="text" placeholder='TYPE'/> 
                <input type="text" placeholder='METHOD'/> 
            </div>
            break;
        case EScreens.GOALS:
            filterElement = <div>
                <input type="text" placeholder='GOAL'/>
                <input type="date" placeholder='DATE'/> 
                <input type="text" placeholder='TARGET DATE'/> 
            </div>
            break;
        default:
            filterElement = <>ERRO</>
            break;
    }

    return filterElement

}

export default Filter;
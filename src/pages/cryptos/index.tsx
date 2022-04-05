import React from 'react';
import { TableComponent } from '../../shared/components';
import { ICrypto } from '../../shared/interfaces/cryptos.interface';

export const Cryptos = () => {
    let items: ICrypto[] = [{
        fiatValue: 10,
        amount: 10,
        token: 'BTC',
        purchasingDate: new Date(),
        id: 'asdsd'
    },
    {
        fiatValue: 11,
        amount: 12,
        token: 'EYH',
        purchasingDate: new Date(),
        id: 'asdsd2'
    }];

    let headers = ['fiat value', 'amount', 'token', 'purchasing date', 'id']
    return (
            <TableComponent items={items}
            renderItem={(items) => {
                return (
                    <>
                        <td className="border px-8 py-4">{items.amount} </td>
                        <td className="border px-8 py-4">{items.fiatValue} </td>
                        <td className="border px-8 py-4">{items.token} </td>
                        <td className="border px-8 py-4">{items.purchasingDate.toDateString()} </td>
                        <td className="border px-8 py-4">{items.id} </td>
                    </>
                )
            }}
            headers={headers}/>
    )
}
import React from 'react';
import { TableComponent } from '../../shared/components';
import { ICrypto } from '../../shared/interfaces/cryptos.interface';

export const Cryptos = () => {
    let items: ICrypto[] = [];
    return (
        <div>
            <TableComponent items={items}>
                {(item) => (
                    <div>
                        
                    </div>
                )}
            </TableComponent>
        </div>
    )
}
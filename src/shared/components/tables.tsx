import React from "react";

interface IProps<T> {
    children: (item: T) => React.ReactNode
    items: T[];
}

interface test {
    id: string
}
export const TableComponent = <T extends test>(props: IProps<T>) => {
    console.log('props', props.items.map(item => item));
    console.log('items', typeof props.items)
    return (
        <>
        HAI
        </>
    )
}
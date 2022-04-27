import React, { ChangeEvent } from "react";


enum EInputType {
    text,
    checkbox,
    select,
    date,
    number
}

export interface ISelectOptions {
    label: string,
    value: number
}
interface IProps {
    type: EInputType,
    id: string,
    value: any,
    handleChange: (e: ChangeEvent) => void,
    handleBlur: (e: any) => void,
    error: boolean,
    valid: boolean,
    selectOptions?: Array<ISelectOptions>
}

const FormInput = ({
    type,
    id,
    value,
    handleChange,
    handleBlur,
    error,
    valid,
    selectOptions }: IProps) => {

    let className = "bg-zinc-400  col-span-6  rounded-md text-black focus-visible:bg-zinc-600 px-3 py-2 border-2 border-gray-500 transition ease-linear hover:bg-zinc-500 hover:border-solid hover:border-gray-700 focus-visible:outline-none focus-visible:border-gray-900";

    if (error)
        className += " border-red-700";
    if (valid)
        className += " border-green-700";

        

    const sharedProps = {
        id,
        name: id,
        value,
        onChange: handleChange,
        onBlur: handleBlur,
        key: id,
        className,
    }
    switch (type) {
        case EInputType.text:
            return <input
                type="text"
                {...sharedProps} />
        case EInputType.select:
            return <select {...sharedProps}>
                <option value=''>SELECT</option>

                {selectOptions?.map(so => (
                    <option key={so.label + '_' + so.value} value={so.value}>{so.label}</option>
                ))}
            </select>
        case EInputType.number:
            return <input
                type="number"
                step="0.01"
                min="0"
                {...sharedProps} />
        case EInputType.checkbox:
            return <select {...sharedProps}>
                <option value='false'>NO</option>
                <option value='true'>YES</option>
            </select>
        case EInputType.date:
            sharedProps.className += ""
            return <input
                type="date"
                {...sharedProps} />
        default:
            return null
    }
}

export default FormInput
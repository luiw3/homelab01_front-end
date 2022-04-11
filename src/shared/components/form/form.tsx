import React from "react";
import { useFormik } from 'formik';
import { EScreens } from "../../enum";
import { useSpring, animated } from "react-spring";
import { IconType } from "react-icons";
import { useNavigate, useLocation } from 'react-router-dom';


interface IProps {
    type: EScreens,
    icon: IconType,
    onSubmit: (values: any) => void
}

const generateForm = (type: EScreens) => {
    switch (type) {
        case EScreens.CRYPTO:
            return {
                initialValues: {
                    token: '',
                    purchasingDate: new Date(),
                    amount: 0,
                    fiatValue: 0
                },
                formFields:[
                {
                    label: 'token',
                    fieldId: 'token'
                },
                {
                    label: 'purchasing date',
                    fieldId: 'purchasingDate'
                },
                {
                    label: 'amount',
                    fieldId: 'amount'
                },
                {
                    label: 'fiat value',
                    fieldId: 'fiatValue'
                }
            ]
        };
        case EScreens.EXPENSES:
            return  {
                initialValues: {
                    name: '',
                    expenseDate: new Date(),
                    expenseType: null,
                    paymentMethod: null,
                    value: 0,
                    isRecurrent: false
                },
                formFields: [
                {
                    label: 'name',
                    fieldId: 'name'
                },
                {
                    label: 'Expense Date',
                    fieldId: 'expenseDate'
                },
                {
                    label: 'Expense Type',
                    fieldId: 'expenseType'
                },
                {
                    label: 'Payment Method',
                    fieldId: 'paymentMethod'
                },
                {
                    label: 'Total',
                    fieldId: 'Value'
                },
                {
                    label: 'Is a recurrent expense?',
                    fieldId: 'isRecurrent'
                }
            ]}
        case EScreens.GOALS:
            return {
                initialValues: {
                    goal: '',
                    targetDate: new Date(),
                    expenseType: null,
                    amountNeeded: 0,
                    needsMoney: false,
                    totalSaved: 0,
                },
                formFields: [
                {
                    label: 'name',
                    fieldId: 'goal'
                },
                {
                    label: 'needs money',
                    fieldId: 'needsMoney'
                },
                {
                    label: 'amount needed',
                    fieldId: 'amountNeeded'
                },
                {
                    label: 'totalSaved',
                    fieldId: 'totalSaved'
                },
                {
                    label: 'target date',
                    fieldId: 'targetDate'
                }
            ]}
    }
}

const Form = ({ type, icon, onSubmit }: IProps) => {
    const animation = useSpring({to: {y: 1, opacity: 1}, from: {y:-23, opacity: 0}});
    const AnimatedIcon = animated(icon);
    const { initialValues, formFields } = generateForm(type);
    const nav = useNavigate();
    const loc = useLocation();

    let formik = useFormik({
            initialValues: initialValues,
            onSubmit: values => onSubmit(values)
        });
    
    const cancelButton = () => {
        nav('/' + loc.pathname.split('/')[1]);
    }

    return (
        <div className="w-full h-full flex items-center">
            {
            formik ? 
                <form className="w-11/12 h-5/6 m-auto p-12 bg-gray-400 rounded-lg" onSubmit={formik.handleSubmit}>
                    <div className="flex w-full h-full items-center">
                        <div className="grid grid-cols-12 grid-rows-6 gap-y-4 gap-x-20 flex-1">
                            <div className="col-span-6 row-span-5">
                                {formFields.map(f =>
                                    <div className="flex flex-col items-center text-md">
                                        <label className="px-5 self-start h-2/6 after:content-['*'] after:text-red-700 my-2">{f.label.charAt(0).toUpperCase() + f.label.slice(1)} </label>
                                        <input id={f.fieldId} name={f.fieldId} value={(formik.values as any)[f.fieldId]} onChange={formik.handleChange} className="w-11/12 bg-zinc-500 rounded-md text-white focus-visible:bg-zinc-600 h-4/6 px-3 py-2 border-b-2 border-transparent transition ease-linear mx-2 hover:border-solid hover:border-gray-700 focus-visible:outline-none focus-visible:border-gray-900" />
                                    </div>
                                )}
                            </div>
                            <div className="col-span-6 row-span-5">
                                <div className="w-full h-full flex items-center justify-center">
                                    <AnimatedIcon style={animation} size="10em"/>
                                </div>
                            </div>
                            <div className="col-span-6 flex row-start-6 justify-center items-end row-span-1">
                                <div className="w-4/6 flex justify-around">
                                    <button type="button" onClick={cancelButton} className="text-white bg-[#ff0000] hover:bg-red-600 shadow-sm shadow-gray-900 transition ease-in-out duration-500 hover:text-neutral-900 rounded-md py-1 w-5/12 h-full flex items-center justify-center">
                                        CANCEL
                                    </button>
                                    <button type="submit" className="text-white bg-[#02a107] hover:bg-green-600 shadow-sm shadow-gray-900 transition ease-in-out duration-500 hover:text-neutral-900 rounded-md py-1 w-5/12 h-full flex items-center justify-center">
                                        SAVE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form> : 
            ''}
            
        </div>
        
    )
}

export default Form
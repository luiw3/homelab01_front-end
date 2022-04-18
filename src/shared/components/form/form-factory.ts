import * as Yup from 'yup';
import { EScreens } from '../../enum';
import { FaBitcoin, FaCheckSquare, FaMoneyBill } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { createCrypto } from '../../../pages/cryptos/service/crypto-service';
import { useLocation } from 'react-router-dom';
import { ISelectOptions } from './formInput';

export interface IFormFields {
    label: string,
    fieldId: string,
    type: number,
    options?: Array<ISelectOptions>
}

interface IFormValues {
    initialValues: Object,
    validationSchema: Yup.AnyObjectSchema,
    formFields: Array<IFormFields>,
    onSubmit: (values: any) => void,
    icon: IconType,
    formType: EScreens
}


function castPathToEnum (str: string): EScreens {
    if(str.split('/')[1].toUpperCase() === EScreens.CRYPTO)
        return EScreens.CRYPTO
    else if (str.split('/')[1].toUpperCase() === EScreens.GOALS)
        return EScreens.GOALS
    else
        return EScreens.EXPENSES
}   

function generateFormByType (type: EScreens): IFormValues {
    switch (type) {
        case EScreens.CRYPTO:
            return {
                initialValues: {
                    token: '',
                    purchasingDate: new Date().toISOString().substring(0,10),
                    amount: 0,
                    fiatValue: 0
                },
                validationSchema: Yup.object().shape({
                    token: Yup.string()
                    .required('Please enter token name!'),
                    purchasingDate: Yup.date()
                    .default(new Date()),
                    amount: Yup.number()
                    .required('Enter the amount of tokens'),
                    fiatValue: Yup.number()
                    .required('Enter the fiat value of the transaction'),
                }),
                formFields:[
                {
                    label: 'token',
                    fieldId: 'token',
                    type: 0
                },
                {
                    label: 'purchasing date',
                    fieldId: 'purchasingDate',
                    type: 3
                },
                {
                    label: 'amount',
                    fieldId: 'amount',
                    type: 4
                },
                {
                    label: 'fiat value',
                    fieldId: 'fiatValue',
                    type: 4
                }
            ],
            onSubmit: (values) => createCrypto(values),
            icon: FaBitcoin,
            formType: EScreens.CRYPTO
        };
        case EScreens.EXPENSES:
            return  {
                initialValues: {
                    name: '',
                    expenseDate: new Date().toISOString().substring(0,10),
                    expenseType: undefined,
                    paymentMethod: undefined,
                    value: 0,
                    isRecurrent: false
                },
                validationSchema: Yup.object().shape({
                    name: Yup.string()
                    .required('Please enter the expense name!'),
                    expenseDate: Yup.date()
                    .default(new Date()),
                    expenseType: Yup.string()
                    .required('Enter the expense type'),
                    paymentMethod: Yup.string()
                    .required('Enter the payment method'),
                    value: Yup.number()
                    .min(1, 'Value must be greater than 0'),
                }),
                formFields: [
                {
                    label: 'Name',
                    fieldId: 'name',
                    type: 0
                },
                {
                    label: 'Expense Date',
                    fieldId: 'expenseDate',
                    type: 3
                },
                {
                    label: 'Recurrent?',
                    fieldId: 'isRecurrent',
                    type: 1
                },
                {
                    label: 'Expense Type',
                    fieldId: 'expenseType',
                    type: 2,
                    options: [
                        {
                            label: 'RENT',
                            value: 0
                        },
                        {
                            label: 'BILLS',
                            value: 1
                        },
                        {
                            label: 'HOUSE',
                            value: 2
                        },
                        {
                            label: 'TAKEAWAY',
                            value: 3
                        },
                        {
                            label: 'MARKET',
                            value: 4
                        },
                        {
                            label: 'MISC',
                            value: 5
                        },
                        {
                            label: 'LEISURE',
                            value: 6
                        },
                        {
                            label: 'CATS',
                            value: 7
                        }
                    ]
                },
                {
                    label: 'Payment Method',
                    fieldId: 'paymentMethod',
                    type: 2,
                    options: [
                        {
                            label: 'CREDIT',
                            value: 0
                        },
                        {
                            label: 'DEBIT',
                            value: 1
                        }
                    ]
                },
                {
                    label: 'Total',
                    fieldId: 'value',
                    type: 4
                }
            ],
            onSubmit: (values) => createCrypto(values),
            icon: FaMoneyBill,
            formType: EScreens.EXPENSES
        }
        case EScreens.GOALS:
            return {
                initialValues: {
                    goal: '',
                    targetDate: new Date().toISOString().substring(0,10),
                    amountNeeded: 0,
                    needsMoney: "false",
                    totalSaved: 0,
                },
                validationSchema: Yup.object().shape({
                    goal: Yup.string()
                    .required('Please enter the goal name!'),
                    targetDate: Yup.date()
                    .min(new Date(), 'please enter a future date'),
                    amountNeeded: Yup.number()
                    .required('Enter the amount needed'),
                    totalSaved: Yup.number()
                    .required('Enter the cost of the expense'),
                }),
                formFields: [
                {
                    label: 'name',
                    fieldId: 'goal',
                    type: 0
                },
                {
                    label: 'Target Date',
                    fieldId: 'targetDate',
                    type: 3
                },
                {
                    label: 'needs money',
                    fieldId: 'needsMoney',
                    type: 1
                },
                {
                    label: 'amount needed',
                    fieldId: 'amountNeeded',
                    type: 4
                },
                {
                    label: 'Total Saved',
                    fieldId: 'totalSaved',
                    type: 4
                }
            ],
            onSubmit: (values) => createCrypto(values),
            icon: FaCheckSquare,
            formType: EScreens.GOALS
        }
    }
}

export function useForm (): IFormValues {
    return generateFormByType(castPathToEnum(useLocation().pathname))
}

import { IUser } from "./user.interface";

export enum EExpenseType {
    RENT = 'RENT',
    BILLS = 'BILLS',
    HOUSE = 'HOUSE',
    TAKEAWAY = 'TAKEAWAY',
    MARKET = 'MARKET',
    MISC = 'MISC',
    LEISURE = 'LEISURE',
    CATS = 'CATS'
}

export enum EPaymentMethod {
    CREDIT = 'CREDIT',
    DEBIT = 'DEBIT'
}

export interface IExpense {
    id: string;
    expenseType: EExpenseType;
    value: number;
    expenseDate: Date
    paymentMethod: EPaymentMethod
}

export type IExpenseWithUser = IExpense & {
    user: IUser
}
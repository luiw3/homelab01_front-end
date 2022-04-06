import { EExpenseType, EPaymentMethod } from "../enum";
import { IUser } from "./user.interface";

export interface IExpense {
    id: string;
    name: string;
    expenseType: EExpenseType;
    value: number;
    expenseDate: Date
    paymentMethod: EPaymentMethod
}

export type IExpenseWithUser = IExpense & {
    user: IUser
}
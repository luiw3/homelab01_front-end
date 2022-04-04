import { ICrypto } from "./cryptos.interface";
import { IExpense } from "./expenses.interface";
import { IGoal } from "./goals.interface";

export interface IUser {
    id: string;
    email: string;
    name: string;
    password: string;
}

export type IUserData = IUser & {
    expenses: IExpense[],
    cryptos: ICrypto[],
    goals: IGoal[]
}
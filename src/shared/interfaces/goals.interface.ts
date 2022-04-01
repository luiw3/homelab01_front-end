import { IUser } from "./user.interface";

export interface IGoal {
    id: string;
    goal: string;
    amountNeeded: number;
    fiatValue: number;
    totalSaved: number;
    limitDate: Date
}

export type IGoalWithUser = IGoal & {
    user: IUser
}
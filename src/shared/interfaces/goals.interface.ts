import { IUser } from "./user.interface";

export interface IGoal {
    id: string;
    goal: string;
    amountNeeded: number;
    totalSaved: number;
    targetDate: Date
}

export type IGoalWithUser = IGoal & {
    user: IUser
}
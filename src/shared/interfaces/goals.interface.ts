import { IUser } from "./user.interface";

export interface IGoal {
    id: string;
    goal: string;
    amountNeeded: number;
    totalSaved: number;
    targetDate: Date;
    parent?: IGoal,
    children?: IGoal
}

export type IGoalWithUser = IGoal & {
    user: IUser
}